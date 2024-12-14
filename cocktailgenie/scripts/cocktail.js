// 从Excel读取鸡尾酒数据
async function loadCocktailData() {
    try {
        const response = await fetch('data/cocktails.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, {type: 'array'});
        
        // 读取三个sheet的数据
        const basicInfo = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
        const ingredients = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[1]]);
        const instructions = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[2]]);
        
        // 转换为所需的数据结构
        const cocktailData = {
            cocktails: {}
        };
        
        // 处理基本信息
        basicInfo.forEach(row => {
            cocktailData.cocktails[row['鸡尾酒名称']] = {
                description: row['描述'],
                difficulty: row['难度'],
                image: row['图片路径'],
                ingredients: [],
                instructions: []
            };
        });
        
        // 处理配料信息
        ingredients.forEach(row => {
            const cocktailName = row['鸡尾酒名称'];
            if (cocktailData.cocktails[cocktailName]) {
                cocktailData.cocktails[cocktailName].ingredients.push({
                    name: row['配料名称'],
                    amount: row['用量'] || 0,
                    unit: row['单位'] || 'ml'
                });
            }
        });
        
        // 处理步骤信息
        instructions.forEach(row => {
            const cocktailName = row['鸡尾酒名称'];
            if (cocktailData.cocktails[cocktailName] && row['步骤']) {
                cocktailData.cocktails[cocktailName].instructions.push(row['步骤']);
            }
        });
        
        return cocktailData;
    } catch (error) {
        console.error('加载Excel数据失败:', error);
        return null;
    }
}

// 修改初始化代码
document.addEventListener('DOMContentLoaded', async function() {
    // 加载鸡尾酒数据
    const cocktailData = await loadCocktailData();
    
    // 加载材料选项
    await loadIngredients();
    
    // 获取按钮元素
    const findButton = document.getElementById('find-cocktails');
    if (findButton) {
        findButton.addEventListener('click', function() {
            const selectedIngredients = getSelectedIngredients();
            if (selectedIngredients.length === 0) {
                alert('请至少选择一种材料');
                return;
            }
            
            // 查找匹配的鸡尾酒
            const matchingCocktails = findMatchingCocktails(selectedIngredients, cocktailData);
            
            // 显示结果
            displayResults(matchingCocktails);
        });
    }
});

// 预处理数据，建立索引
function buildIngredientIndex(data) {
    const index = new Map();
    
    Object.entries(data.cocktails).forEach(([name, cocktail]) => {
        cocktail.ingredients.forEach(ingredient => {
            const ingredientName = ingredient.name;
            if (!index.has(ingredientName)) {
                index.set(ingredientName, new Set());
            }
            index.get(ingredientName).add(name);
        });
    });
    
    return index;
}

function getSelectedIngredients() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

// 查找匹配的鸡尾酒
function findMatchingCocktails(selectedIngredients, cocktailData) {
    const matchingCocktails = [];
    
    if (!cocktailData || !cocktailData.cocktails) {
        return matchingCocktails;
    }
    
    Object.entries(cocktailData.cocktails).forEach(([name, cocktail]) => {
        const cocktailIngredients = cocktail.ingredients.map(ing => ing.name);
        const matchCount = selectedIngredients.filter(ing => 
            cocktailIngredients.includes(ing)).length;
            
        if (matchCount > 0) {
            matchingCocktails.push({
                name,
                cocktail,
                matchCount,
                total: cocktailIngredients.length,
                missingCount: cocktailIngredients.length - matchCount
            });
        }
    });
    
    // 按匹配度排序（匹配材料数量多的排在前面）
    matchingCocktails.sort((a, b) => {
        // 首先按匹配数量排序
        const matchDiff = b.matchCount - a.matchCount;
        if (matchDiff !== 0) return matchDiff;
        // 如果匹配数量相同，按缺失材料数量排序
        return a.missingCount - b.missingCount;
    });
    
    return matchingCocktails;
}

// 显示结果
function displayResults(matchingCocktails) {
    const resultsSection = document.getElementById('results');
    const cocktailList = document.getElementById('cocktail-list');
    
    if (!cocktailList) return;
    
    cocktailList.innerHTML = '';
    
    if (matchingCocktails.length === 0) {
        cocktailList.innerHTML = '<p>未找到匹配的鸡尾酒配方</p>';
    } else {
        matchingCocktails.forEach(({name, cocktail, matchCount, total}) => {
            const card = document.createElement('div');
            card.className = 'cocktail-card';
            
            // 添加图片（如果有）
            if (cocktail.image) {
                const img = document.createElement('img');
                img.src = cocktail.image;
                img.alt = name;
                card.appendChild(img);
            }
            
            const content = `
                <h3 class="cocktail-name">${name}</h3>
                <p class="match-info">匹配材料: ${matchCount}/${total}</p>
                <div class="cocktail-ingredients">
                    <h4>所需材料:</h4>
                    <ul>
                        ${cocktail.ingredients.map(ing => `
                            <li>${ing.name}: ${ing.amount}${ing.unit}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="cocktail-instructions">
                    <h4>制作步骤:</h4>
                    <ol>
                        ${cocktail.instructions.map(step => `
                            <li>${step}</li>
                        `).join('')}
                    </ol>
                </div>
            `;
            
            card.innerHTML += content;
            cocktailList.appendChild(card);
        });
    }
    
    resultsSection.classList.remove('hidden');
}

// 假设已经引入了SheetJS库
async function loadIngredients() {
    try {
        // 添加默认的材料数据，以防 Excel 文件加载失败
        const defaultIngredients = {
            'base': ['伏特加', '金酒', '朗姆酒', '龙舌兰', '威士忌'],
            'liqueur': ['君度橙酒', '百利甜', '卡鲁瓦', '咖啡利口酒'],
            'mixer': ['柠檬汁', '青柠汁', '糖浆', '苏打水', '可乐', '橙汁']
        };
        
        // 生成HTML
        Object.entries(defaultIngredients).forEach(([category, items]) => {
            const containerSelector = category === 'base' ? '#base-spirits .ingredients' :
                                    category === 'liqueur' ? '#liqueurs .ingredients' :
                                    '#mixers .ingredients';
            const container = document.querySelector(containerSelector);
            if (container) {
                container.innerHTML = ''; // 清空加载提示
                items.forEach(name => {
                    const label = document.createElement('label');
                    label.innerHTML = `<input type="checkbox" name="${category}" value="${name}"> ${name}`;
                    container.appendChild(label);
                });
            }
        });
        
        // 尝试加载 Excel 文件（如果存在的话）
        const response = await fetch('data/cocktailgenie.xlsx');
        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: 'array' });
        
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const ingredients = XLSX.utils.sheet_to_json(sheet);
        
        // 按类别分组材料
        const categories = {
            'base': [],
            'liqueur': [],
            'mixer': []
        };
        
        ingredients.forEach(item => {
            if (categories[item.category]) {
                categories[item.category].push(item.name);
            }
        });
        
        // 生成HTML
        Object.keys(categories).forEach(category => {
            const container = document.querySelector(`#${category}-spirits .ingredients`);
            categories[category].forEach(name => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="checkbox" name="${category}" value="${name}"> ${name}`;
                container.appendChild(label);
            });
        });
    } catch (error) {
        console.log('使用默认材料数据');
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', loadIngredients);