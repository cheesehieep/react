import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from './../pages/views/Admin/Dashboard'
import Products from './../pages/views/Admin/Products'
import AddProduct from './../pages/views/Admin/AddProduct'
import EditProduct from './../pages/views/Admin/EditProduct'
import Categories from './../pages/views/Admin/Categories'
import AddCategory from './../pages/views/Admin/AddCategory'
import EditCategory from './../pages/views/Admin/EditCategory'
import Types from './../pages/views/Admin/Types'
import AddType from './../pages/views/Admin/AddType'
import EditType from './../pages/views/Admin/EditType'
import Posts from './../pages/views/Admin/Posts'
import AddPost from './../pages/views/Admin/AddPost'
import EditPost from './../pages/views/Admin/EditPost'
import Orders from './../pages/views/Admin/Orders'
import OrderDetails from './../pages/views/Admin/OrderDetails'

//Views
import Home from '../pages/views/Main/Home'
import Shop from '../pages/views/Main/Shop'
import ShopByCate from '../pages/views/Main/ShopByCate'
import Product from '../pages/views/Main/Product'
import Blog from '../pages/views/Main/Blog'
import BlogByCate from '../pages/views/Main/BlogByCate'
import Post from '../pages/views/Main/Post'
import About from '../pages/views/Main/About'
import Cart from '../pages/views/Main/Cart'
import Checkout from '../pages/views/Main/Checkout'
import Thankyou from '../pages/views/Main/Thankyou'
import Login from '../pages/views/Main/Login'

const Routers = ({ products, onAddProduct, onUpdateProduct, onRemoveProduct,
                    categories, onAddCategory, onUpdateCategory, onRemoveCategory,
                    types, onAddType, onUpdateType, onRemoveType,
                    posts, onAddPost, onUpdatePost, onRemovePost,
                    carts, onAddCart, onUpdateCart, onRemoveCart,
                    orders, onAddOrder,
                    orderDetails
}) => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path="/admin" exact>
                                <Dashboard categories={categories} products={products} types={types} posts={posts}/>
                            </Route>
                            <Route path="/admin/categories">
                                <Categories categories={categories} onRemove={onRemoveCategory}/>
                            </Route>
                            <Route path="/admin/add-category">
                                <AddCategory onAdd={onAddCategory}/>
                            </Route>
                            <Route path="/admin/edit-category/:id">
                                <EditCategory categories={categories} onUpdate={onUpdateCategory}/>
                            </Route>
                            <Route path="/admin/products">
                                <Products categories={categories} products={products} onRemove={onRemoveProduct}/>
                            </Route>
                            <Route path="/admin/add-product">
                                <AddProduct categories={categories} onAdd={onAddProduct}/>
                            </Route>
                            <Route path="/admin/edit-product/:id">
                                <EditProduct categories={categories} products={products} onUpdate={onUpdateProduct}/>
                            </Route>
                            <Route path="/admin/types">
                                <Types types={types} onRemove={onRemoveType}/>
                            </Route>
                            <Route path="/admin/add-type">
                                <AddType onAdd={onAddType}/>
                            </Route>
                            <Route path="/admin/edit-type/:id">
                                <EditType types={types} onUpdate={onUpdateType}/>
                            </Route>
                            <Route path="/admin/posts">
                                <Posts types={types} posts={posts} onRemove={onRemovePost}/>
                            </Route>
                            <Route path="/admin/add-post">
                                <AddPost types={types} onAdd={onAddPost}/>
                            </Route>
                            <Route path="/admin/edit-post/:id">
                                <EditPost types={types} posts={posts} onUpdate={onUpdatePost}/>
                            </Route>
                            <Route path="/admin/orders">
                                <Orders orders={orders}/>
                            </Route>
                            <Route path="/admin/order-details/:id">
                                <OrderDetails orderDetails={orderDetails}/>
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} posts={posts}/>
                            </Route>
                            <Route path="/shop" exact>
                                <Shop categories={categories} products={products}/>
                            </Route>
                            <Route path="/shop/:id">
                                <ShopByCate categories={categories} products={products}/>
                            </Route>
                            <Route path="/product/:id">
                                <Product onAddCart={onAddCart}/>
                            </Route>
                            <Route path="/blog" exact>
                                <Blog types={types} posts={posts}/>
                            </Route>
                            <Route path="/blog/:id">
                                <BlogByCate types={types} posts={posts}/>
                            </Route>
                            <Route path="/post/:id">
                                <Post types={types} posts={posts}/>
                            </Route>
                            <Route path="/about" exact>
                                <About/>
                            </Route>
                            <Route path="/cart">
                                <Cart carts={carts} onRemove={onRemoveCart} onUpdate={onUpdateCart}/>
                            </Route>
                            <Route path="/checkout">
                                <Checkout carts={carts} onAdd={onAddOrder}/>
                            </Route>
                            <Route path="/thankyou">
                                <Thankyou />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
