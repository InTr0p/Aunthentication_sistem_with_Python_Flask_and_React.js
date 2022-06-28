const getState = ({getStore, getActions, setStore}) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({email: email, password: password}),
        };

        try {
          const resp = await fetch(
            "https://3001-intr0p-aunthentications-r7o3kn0vigy.ws-us47.gitpod.io/api/token",
            opts
          );
          if (resp.status !== 200) {
            alert("Oh noo!. There was an error");
            return false;
          }

          const data = await resp.json();
          console.log("this came fron the backend", data);
          localStorage.setItem("token", data.acces_token);
        } catch (error) {
          console.error("Oh noo.There has been an error log in ");
        }
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({message: data.message});
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({demo: demo});
      },
    },
  };
};

export default getState;
