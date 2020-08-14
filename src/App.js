import React, {useState, useEffect} from 'react'
import Routers from './routers'
import categoryApi from './api/categoryApi'
import productApi from './api/productApi'
import typeApi from './api/typeApi'
import postApi from './api/postApi'
import orderApi from './api/orderApi'
import orderDetailApi from './api/orderDetailApi'

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [types, setTypes] = useState([]);
  const [posts, setPosts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);


  useEffect(() => {
    const getCategories = async () => {
      try {
        const {data} = await categoryApi.getAll();
        setCategories(data);
      } catch (error) {
        console.log('Failed to request API: ', error)
      }
    }
    getCategories()
  }, []);
  
  const onHandleAddCategory = async (category) => {
    try {
      const {data} = await categoryApi.create(category);
      setCategories([
        ...categories,
        data
      ])
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const onHandleUpdateCategory = async (id, category) => {
    try {
      const {data} = await categoryApi.update(id, category);
      setCategories([...categories], data);
      loadCategories();
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const loadCategories = async () => {
    try {
      const {data} = await categoryApi.getAll();
      setCategories(data.reverse())
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const onHandleRemoveCategory = async (id) => {
    try {
      const {data} = await categoryApi.remove(id);
      const newCategories = categories.filter(category => category.id !== data.id);
      setCategories(newCategories);
      loadCategories();
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const {data} = await productApi.getAll();
        setProducts(data);
      } catch (error) {
        console.log('Failed to request API: ', error)
      }
    }
    getProducts()
  }, []);
  
  const onHandleAddProduct = async (product) => {
    try {
      const {data} = await productApi.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const onHandleUpdateProduct = async (id, product) => {
    try {
      const {data} = await productApi.update(id, product);
      setProducts([...products], data);
      loadProducts();
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const loadProducts = async () => {
    try {
      const {data} = await productApi.getAll();
      setProducts(data.reverse())
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const onHandleRemoveProduct = async (id) => {
    try {
      const {data} = await productApi.remove(id);
      const newProducts = products.filter(product => product.id !== data.id);
      setProducts(newProducts);
      loadProducts();
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  useEffect(() => {
    const getTypes = async () => {
      try {
        const {data} = await typeApi.getAll();
        setTypes(data);
      } catch (error) {
        console.log('Failed to request API: ', error)
      }
    }
    getTypes()
  }, []);
  
  const onHandleAddType = async (type) => {
    try {
      const {data} = await typeApi.create(type);
      setTypes([
        ...types,
        data
      ])
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const onHandleUpdateType = async (id, type) => {
    try {
      const {data} = await typeApi.update(id, type);
      setTypes([...types], data);
      loadTypes();
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const loadTypes = async () => {
    try {
      const {data} = await typeApi.getAll();
      setTypes(data.reverse())
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const onHandleRemoveType = async (id) => {
    try {
      const {data} = await typeApi.remove(id);
      const newTypes = types.filter(type => type.id !== data.id);
      setTypes(newTypes);
      loadTypes();
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  useEffect(() => {
    const getPosts = async () => {
      try {
        const {data} = await postApi.getAll();
        setPosts(data);
      } catch (error) {
        console.log('Failed to request API: ', error)
      }
    }
    getPosts()
  }, []);
  
  const onHandleAddPost = async (post) => {
    try {
      const {data} = await postApi.create(post);
      setPosts([
        ...posts,
        data
      ])
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const onHandleUpdatePost = async (id, post) => {
    try {
      const {data} = await postApi.update(id, post);
      setPosts([...posts], data);
      loadPosts();
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const loadPosts = async () => {
    try {
      const {data} = await postApi.getAll();
      setPosts(data.reverse())
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  const onHandleRemovePost = async (id) => {
    try {
      const {data} = await postApi.remove(id);
      const newPosts = posts.filter(post => post.id !== data.id);
      setPosts(newPosts);
      loadPosts();
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('carts') === null) {
      localStorage.setItem('carts', JSON.stringify([]));
    }
  }, [])

  const onHandleAddCart = (data) => {
    const localCarts = JSON.parse(localStorage.getItem('carts'));
    const findCart = localCarts.find(cart => cart.pro_id == data.pro_id);
    if (findCart) {
      findCart.quantity = Number(findCart.quantity) + Number(data.quantity);
      const newCarts = localCarts.map(cart => (cart.pro_id == data.pro_id ? findCart : cart));
      localStorage.setItem('carts', JSON.stringify(newCarts));
      setCarts(newCarts)
    } else {
      const product = products.find(product => product.id === data.pro_id);
      const productCart = {
        id : carts.length == 0 ? 1 : carts.length + 1,
        pro_id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: data.quantity
      }
      carts.push(productCart);
      localStorage.setItem('carts', JSON.stringify(carts));
    }
  }

  const onHandelUpdateCart = (id, data) => {
    const localCarts = JSON.parse(localStorage.getItem('carts'));
    const findCart = localCarts.find(cart => cart.id == id);
    if (findCart) {
      findCart.quantity = data.quantity;
      const newCarts = localCarts.map(cart => (cart.id == id ? findCart : cart));
      localStorage.setItem('carts', JSON.stringify(newCarts));
      setCarts(newCarts);
    }
  }

  const onHandleRemoveCart = (id) => {
    const localCarts = JSON.parse(localStorage.getItem('carts'));
    const newCarts = localCarts.filter(cart => cart.id !== id);
    localStorage.setItem('carts', JSON.stringify(newCarts));
    setCarts(newCarts);
  }

  useEffect(() => {
    const getOrders = async () => {
      try {
        const {data} = await orderApi.getAll();
        setOrders(data);
      } catch (error) {
        console.log('Failed to request API: ', error)
      }
    }
    getOrders()
  }, []);

  const onHandleAddOrder = async (order) => {
    try {
      const {data} = await orderApi.create(order);
      setOrders([
        ...orders,
        data
      ])

      const localCarts = JSON.parse(localStorage.getItem('carts'));

      localCarts.forEach((cart) => {
        const dataOrder = {
          order_id: data.id,
          product_id: cart.pro_id,
          // name: cart.name,
          // image: cart.image,
          // price: cart.price,
          quantity: cart.quantity
        }
        const {newData} = orderDetailApi.create(dataOrder).then(
          () => {
            setOrderDetails([
              ...orderDetails,
              newData
            ])
          }
        )
        setCarts([]);
        localStorage.setItem('carts', JSON.stringify(carts));
      })
    } catch (error) {
      console.log('Failed to request API: ', error)
    }
  }

  useEffect(() => {
    const getOrderDetails = async () => {
      try {
        const {data} = await orderDetailApi.getAll();
        setOrderDetails(data);
      } catch (error) {
        console.log('Failed to request API: ', error)
      }
    }
    getOrderDetails()
  }, []);

  return (
    <div className="App">
      <Routers 
        categories={categories} 
        onRemoveCategory={onHandleRemoveCategory} 
        onAddCategory={onHandleAddCategory} 
        onUpdateCategory={onHandleUpdateCategory}

        products={products}
        onRemoveProduct={onHandleRemoveProduct} 
        onAddProduct={onHandleAddProduct} 
        onUpdateProduct={onHandleUpdateProduct}

        types={types}
        onRemoveType={onHandleRemoveType} 
        onAddType={onHandleAddType} 
        onUpdateType={onHandleUpdateType}

        posts={posts}
        onRemovePost={onHandleRemovePost} 
        onAddPost={onHandleAddPost} 
        onUpdatePost={onHandleUpdatePost}

        carts={carts}
        onAddCart={onHandleAddCart}
        onUpdateCart={onHandelUpdateCart}
        onRemoveCart={onHandleRemoveCart}

        orders={orders}
        onAddOrder={onHandleAddOrder}

        orderDetails={orderDetails}
      />
    </div>
  )

}
export default App;