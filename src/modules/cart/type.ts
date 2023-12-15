export interface IVariants{
    variant: string,
    sku:string,
    isOutOfStock: number,
    sellingPrice: number,
    mrp: number
}

export interface ICategory{
    id: number,
    name: string
}

export interface IProducts{
    id: Number,
    description: string,
    keywords: string,
    mediaUrl: string,
    category: Array<ICategory>,
    name: string,
    rating: number,
    variants: Array<IVariants>,
}

export interface IInitialState{
    products:Array<IProducts>
}

export interface IProductResponse{
    httpCode: number, 
    httpStatus: null, 
    message: string, 
    object:Array<IProducts>
}