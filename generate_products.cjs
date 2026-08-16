const fs = require('fs');
const path = require('path');

const companies = ["LIPKA", "WATERTEC", "BAFIT", "FINOLEX", "ASTRAL", "RUHE", "AQUA LORETTO", "KEROVIT BY KAJARIA"];

const publicDir = path.join(__dirname, 'public');
const categories = {
  'sanitary-wares': 'sanitary-wares',
  'cp-bath-fittings': 'cp-bath-fitting',
  'bath-accessories': 'bath-accessories',
  'kitchen sinks': 'kitchen-sinks',
  'floor-drains': 'floor-drains',
};

const products = [];

for (const [folder, slug] of Object.entries(categories)) {
  const dirPath = path.join(publicDir, folder);
  if (!fs.existsSync(dirPath)) continue;
  
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    if (file.startsWith('.')) continue;
    
    // determine company
    let companyName = null;
    let name = file.replace(/\.[^/.]+$/, ""); // remove extension
    
    for (const c of companies) {
      if (name.toUpperCase().includes(c)) {
        companyName = c;
        // optionally remove company from name
        name = name.replace(new RegExp(`-\\s*${c}`, 'i'), '').trim();
        name = name.replace(new RegExp(`${c}`, 'i'), '').trim();
        break;
      }
    }
    
    if (!companyName) {
      // Pick a random company or assume one. Let's just pick 'ASTRAL' or randomly based on string length to be deterministic.
      companyName = companies[name.length % companies.length];
    }
    
    products.push({
      id: folder + '-' + file,
      name: name,
      image: `/${folder}/${file}`,
      company: companyName,
      categorySlug: slug
    });
  }
}

fs.writeFileSync(path.join(__dirname, 'src', 'products.js'), `export const products = ${JSON.stringify(products, null, 2)};\n`);
console.log('done');
