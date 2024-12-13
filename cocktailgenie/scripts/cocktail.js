// 直接定义鸡尾酒数据
const cocktailData = {
    cocktails: {
        "玛格丽特": {
            description: "经典的龙舌兰鸡尾酒",
            difficulty: "简单",
            ingredients: ["龙舌兰", "君度橙力娇酒", "青柠汁"],
            instructions: [
                "在杯口抹盐",
                "将所有材料倒入雪克杯",
                "加入冰块摇匀",
                "倒入杯中"
            ],
            image: "images/margarita.jpg"
        },
        "莫吉托": {
            description: "清爽提神的朗姆调酒",
            difficulty: "中等",
            ingredients: ["白朗姆", "薄荷叶", "青柠", "苏打水", "糖浆"],
            instructions: [
                "在杯中捣碎薄荷叶",
                "加入糖浆和青柠",
                "倒入白朗姆",
                "加入碎冰",
                "最后注入苏打水"
            ],
            image: "images/mojito.jpg"
        },
        "柠檬": {
            description: "清爽提神的朗姆调酒",
            difficulty: "中等",
            ingredients: [ "青柠汁"],
            instructions: [
                "在杯中捣碎薄荷叶",
                "加入糖浆和青柠",
                "倒入白朗姆",
                "加入碎冰",
                "最后注入苏打水"
            ],
            image: "images/mojito.jpg"
        },
        "苏打": {
            description: "清爽提神的朗姆调酒",
            difficulty: "中等",
            ingredients: [ "苏打水"],
            instructions: [
                "在杯中捣碎薄荷叶",
                "加入糖浆和青柠",
                "倒入白朗姆",
                "加入碎冰",
                "最后注入苏打水"
            ],
            image: "images/mojito.jpg"
        },
        "古巴自由": {
            description: "简单清爽的朗姆调酒",
            difficulty: "简单",
            ingredients: ["白朗姆", "可乐", "青柠汁"],
            instructions: [
                "在高球杯中加入冰块",
                "倒入朗姆酒",
                "加入可乐",
                "最后挤入青柠汁"
            ],
            image: "images/cuba-libre.jpg"
        }
    }
};

// 建立原料索引
const ingredientIndex = buildIngredientIndex(cocktailData);

// 预处理数据，建立索引
function buildIngredientIndex(data) {
    const index = new Map();
    
    Object.entries(data.cocktails).forEach(([name, cocktail]) => {
        cocktail.ingredients.forEach(ingredient => {
            if (!index.has(ingredient)) {
                index.set(ingredient, new Set());
            }
            index.get(ingredient).add(name);
        });
    });
    
    return index;
}

document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    const findButton = document.getElementById('find-cocktails');
    // 获取结果容器
    const cocktailList = document.getElementById('cocktail-list');
    
    findButton.addEventListener('click', function() {
        // 添加调试信息
        const selectedIngredients = getSelectedIngredients();
        console.log('选中的材料:', selectedIngredients);
        
        const matchingCocktails = findMatchingCocktails(selectedIngredients);
        console.log('匹配的鸡尾酒:', matchingCocktails);
        
        displayResults(matchingCocktails);
    });
});

function getSelectedIngredients() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

function displayResults(cocktails) {
    const resultsSection = document.getElementById('results');
    const cocktailList = document.getElementById('cocktail-list');
    
    // 清空之前的结果
    cocktailList.innerHTML = '';
    
    if (cocktails.length === 0) {
        cocktailList.innerHTML = '<p>未找到匹配的鸡尾酒配方</p>';
    } else {
        cocktails.forEach(({name, cocktail, matchCount, total}) => {
            // 创建鸡尾酒卡片
            const card = document.createElement('div');
            card.className = 'cocktail-card';
            
            // 创建并添加标题
            const title = document.createElement('h3');
            title.className = 'cocktail-name';
            title.textContent = name;
            
            // 创建并添加材料列表
            const ingredients = document.createElement('div');
            ingredients.className = 'cocktail-ingredients';
            ingredients.innerHTML = `<p>材料 (${matchCount}/${total}):</p>
                <ul>${cocktail.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>`;
            
            // 创建并添加制作步骤
            const instructions = document.createElement('div');
            instructions.className = 'cocktail-instructions';
            instructions.innerHTML = `<p>制作步骤:</p>
                <ol>${cocktail.instructions.map(step => `<li>${step}</li>`).join('')}</ol>`;
            
            // 如果有图片，添加图片
            if (cocktail.image) {
                const img = document.createElement('img');
                img.src = cocktail.image;
                img.alt = name;
                card.appendChild(img);
            }
            
            // 将所有元素添加到卡片中
            card.appendChild(title);
            card.appendChild(ingredients);
            card.appendChild(instructions);
            
            // 将卡片添加到结果列表中
            cocktailList.appendChild(card);
        });
    }
    
    // 显示结果区域
    resultsSection.classList.remove('hidden');
}

function findMatchingCocktails(ingredients) {
    const matchingCocktails = [];
    
    // 添加调试信息
    console.log('所有鸡尾酒数据:', cocktailData.cocktails);
    
    Object.entries(cocktailData.cocktails).forEach(([name, cocktail]) => {
        const totalIngredients = cocktail.ingredients.length;
        const matchCount = ingredients.filter(ing => 
            cocktail.ingredients.includes(ing)).length;
        const missingCount = totalIngredients - matchCount;
        
        // 添加调试信息
        console.log(`检查鸡尾酒 ${name}:`, {
            totalIngredients,
            matchCount,
            missingCount,
            ingredients: cocktail.ingredients
        });
        
        if (matchCount > 0 && missingCount <= Math.ceil(totalIngredients / 2)) {
            matchingCocktails.push({
                name,
                cocktail,
                matchCount,
                total: totalIngredients,
                missingCount
            });
        }
    });
    
    // 添加调试信息
    console.log('筛选后的鸡尾酒:', matchingCocktails);
    
    matchingCocktails.sort((a, b) => {
        if (a.missingCount !== b.missingCount) {
            return a.missingCount - b.missingCount;
        }
        return b.matchCount - a.matchCount;
    });
    
    return matchingCocktails;
}