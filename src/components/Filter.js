const [products, setProducts] = useState(items)
    const [category, setCategory] = useState("")
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(1100)
    //e = event for the value when select changes
    const handleCategoryChange = (e) => {
        if (e.target.value === "all") {
            return setProducts(items)
        };
        let filteredProducts = items.filter(product => product.category === e.target.value)
        setProducts(filteredProducts)
    }
    const handleMinChange = (e) => {
        let filteredProducts = items.filter(product => product.price > e.target.value)
        setProducts(filteredProducts)
    }
    const handleMaxChange = (e) => {
        if (e.target.value === "") {
            return setProducts(items)
        };
        let filteredProducts = items.filter(product => product.price < e.target.value)
        setProducts(filteredProducts)
    }