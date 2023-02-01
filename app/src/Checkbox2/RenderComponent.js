import { Box} from "@mui/system";
import React, { useState } from "react";
import CheckboxSecond from "./CheckboxSecond";

import { productsList } from "./data";
import ProductListSecond from "./ProductListSecond";
// import "./styles.css";

const RenderComponent = () => {
  const [categories, setCategories] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });



  //categories
  const handleChange = e => {
    const { name } = e.target;
    setCategories({ ...categories, [name]: !categories[name] });
  };



  //filter products by categories
  const checkedProducts = Object.entries(categories)
    .filter(category => category[1])
    .map(category => category[0]);
  const filteredProducts = productsList.filter(({ category }) =>
    checkedProducts.includes(category)
  );




  return (
    <Box sx={{ display: {xs: "block", sm: "flex"},justifyContent: "center", gap: {sm: 1, md: 1, lg: 1} }}>
        <Box>


        <Box sx={{paddingLeft: 5,  minWidth: 240, alignItems: "center"}}>
            <h3>Tipo di Prodotto</h3>

            <CheckboxSecond
                id="1"
                title="Set"
                name="first"
                checked={categories.first}
                handleChange={handleChange}
                
            />
            <CheckboxSecond
                id="2"
                title="Home decor"
                name="second"
                handleChange={handleChange}
                checked={categories.second}
            />
            <CheckboxSecond
                id="2"
                title="Fiori"
                name="third"
                handleChange={handleChange}
                checked={categories.third}
            />
            <CheckboxSecond
                id="2"
                title="Regali di Pasqua"
                name="fourth"
                handleChange={handleChange}
                checked={categories.fourth}
            />
                <CheckboxSecond
                        id="2"
                        title="Adulti"
                        name="fifth"
                        handleChange={handleChange}
                        checked={categories.fifth}
                    />
            </Box>
            </Box>

            <Box>
                  <ProductListSecond
                            products={
                            filteredProducts.length === 0 ? productsList : filteredProducts
                            }
                     />
            </Box>


    </Box>
  );
};

export default RenderComponent;
