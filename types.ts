export interface User {
  id: string
  name: string
  email: string
  role: string
  password: string
  cart: Cart
  wishlist: Wishlist
  shippingInformation: ShippingInformation
  orders: Order[]
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  material: Material
  materialId: number
  gemstone: Gemstone
  gemstoneId: number
  weight: number
  carat: number
  dimensions: string
  style: string
  collection: Collection
  collectionId: number
  image: Image
  category: string
  certification: string
  occasion: String[]
  careInstructions: string
  createdAt: string
  updatedAt: string
  //: Additional
  isFeatured: boolean
  rating: number
  cartItems: CartItem[]
  orderItems: OrderItem[]
  wishlistItems: WishlistItem[]
}

export interface Cart {
  id: string
  userId: string
  cartItems: CartItem[]
  user: User
}

export interface CartItem {
  id: string
  productId: string
  quantity: number
  cartId: string
  cart: Cart
  product: Product
}

export interface ShippingInformation {
  id: string
  firstName: string
  lastName: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  phoneNumber: string
  userId: string
  orders: Order[]
  user: User
}

export interface Order {
  id: string
  userId: string
  orderItems: OrderItem[]
  totalAmount: number
  shippingInformationId: string
  paymentStatus: PaymentStatus
  orderStatus: OrderStatus
  user: User
  shippingInformation: ShippingInformation
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  quantity: number
  order: Order
  product: Product
}

export interface Wishlist {
  id: string
  userId: string
  wishlistItems: WishlistItem[]
  user: User
}

export interface WishlistItem {
  id: string
  wishlistId: string
  productId: string
  wishlist: Wishlist
  product: Product
}

export interface Material {
  id: number
  name: string
  purity: number
  products: Product[]
}

export interface Gemstone {
  id: number
  type: string
  color: string
  cut: string
  clarity: string
  origin: string
  products: Product[]
}

export interface Collection {
  id: number
  name: string
  description: string
  products: Product[]
  createdAt: string
}

export interface Image {
  id: string
  url: string
  altText: string
  productId: string
  product: Product
}

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  FAILED = "FAILED"
}

export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED"
}