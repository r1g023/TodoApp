//point of local sotrag repalce any useSatte call where you want that data to persist.

// To retrieve an item from localStorage, call localStorage.getItem('itemName')
// If that item doesn't exist, it will return undefined
/////////////
//set up state property,
//capture the values,
//if local data use that, else use initial data
//update localstorage when needed
//dont forget to parse data from locastorage and string

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // // Get from local storage by key
    // const item = window.localStorage.getItem(key);
    // // Parse and return stored json or, if undefined, return initialValue
    // return item ? JSON.parse(item) : initialValue;
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setValue = (value) => {
    // Save state
    setStoredValue(value);
    console.log(storedValue, "storedvalue");
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
