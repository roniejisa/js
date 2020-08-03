//  1 vs 1
const cateProducts = products.map(product => {
    return categories.find(cate => product.cate_id === cate.id)
})

// 1 vs nhiều

const toltalProduct = categories.map(cate => {
    return products.filter(pro => pro.cate_id === cate.id);
})