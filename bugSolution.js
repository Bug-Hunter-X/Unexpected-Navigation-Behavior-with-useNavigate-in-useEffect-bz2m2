const MyComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setData(data);
        // Navigate only after successful fetch
        if (data) {
          navigate('/success');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* ... display data ... */}
    </div>
  );
};