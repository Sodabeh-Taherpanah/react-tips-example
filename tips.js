export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutValue = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutValue);
  }, [value]);
}

//usage
const debouncedValue = useDebounce(value, 500);

useEffect(() => {
  //SearchSomething(value)
}, [debouncedValue]);
