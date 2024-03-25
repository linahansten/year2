// pages/index.js

const YourPage = ({ items }) => {

    return (
      <div>
        <h1>Your Page</h1>
        <ul>
          {items ? (
            items.map((item) => (
              <li key={item.id}>
                <p>ID: {item.id}</p>
                <p>Product ID: {item.productid}</p>
                <p>URL: {item.url}</p>
              </li>
            ))
          ) : (
            <li>No items to display</li>
          )}
        </ul>
      </div>
    );
  };
  
  export async function getServerSideProps(context) {
    console.log("hi")
    try {
      const response = await fetch('http://10.111.3.78:3001/api/mega');
  
      if (!response.ok) {
        console.error('Error fetching data:', response.statusText);
        return {
          notFound: true,
        };
      }
  
      const data = await response.json();
      
      // Log the entire fetched data
      console.log('Fetched data:', data);
  
      // Set the default limit to 100 items
      const defaultLimit = 100;
  
      // Extract the limit from the URL query parameters, use default if not provided
      const limit = context.query.limit ? parseInt(context.query.limit, 10) : defaultLimit;
  
      // Ensure the limit is within a reasonable range
      const adjustedLimit = Math.min(Math.max(limit, 1), defaultLimit);
  
      // Take the first 'adjustedLimit' items
      const limitedData = data.slice(0, adjustedLimit);
  
      // Log the limited data
      console.log('Limited data:', limitedData);
  
      // Return the data as props
      return {
        props: {
          items: limitedData,
        },
      };
    } catch (error) {
      console.error('An error occurred:', error);
      return {
        notFound: true,
      };
    }
  }

  
  export default YourPage;
  