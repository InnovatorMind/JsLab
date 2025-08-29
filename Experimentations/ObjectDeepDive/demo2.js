const address = {
    street: "123 Main St",
    city: "Sample City",
    country: {
      name: "Sample Country",
      code: "SC",
      region: {
        name: "Sample Region",
        zone: "North"
      }
    }
  };
  
  // Function to check for a key in a nested object
  function hasNestedKey(obj, key) {
    // Check if the key exists at the current level
    if (key in obj) {
      return true;
    }
  
    // Check nested objects
    for (const k in obj) {
      if (typeof obj[k] === "object" && obj[k] !== null) {
        if (hasNestedKey(obj[k], key)) {
          return true;
        }
      }
    }
  
    // Key not found
    return false;
  }
  
  // Example usage
  console.log("street" in address); // Output: true (direct key check)
  console.log("zone" in address); // Output: false (direct key check)
  
  console.log(hasNestedKey(address, "zone")); // Output: true (nested key check)
  console.log(hasNestedKey(address, "postalCode")); // Output: false (not found)
  