## TypeScripts Questions

### Basic Types
1. Build a function that formats a price(number) into a currency string(99,"99").

2. Define a variable for a product's status which can only be 'in-stock' , 'out-of-stock', or 'discountinued'.

3. Create a function that takes a list of products (array of strings) and returns only the ones containing a specific substring.

4. Use a union type to represent the result of an API call ({ success:true, data:any } or { success: false, error: string }).

5. Define a tuple for a product [productId , productName , price] and destructure it in a function.

### Interface

1. Define an interface for a User object with properties: id, name, and email. Implement the interface in a variable.
2. Extend the above User interface to include an optional property age.

3. Create a function that accepts an object implementing the User interface and logs the name property.

4. Write an interface Shape with properties name and area(). Extend this interface for Circle and Square.

5. Use an interface to type a shopping cart with dynamic keys for productId and their respective quantities.