import axios from "axios"; 

// the recipes  method retrieves receiptes from the server 

// It accepts a "query" or term to search the recipe api for 

export default {
    getRecipes : function (query) {
return axios.get("/api/recipes" , {params: {q: query}});

    }
}