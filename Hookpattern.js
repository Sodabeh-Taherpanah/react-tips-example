export function useHover() {
  const [isHovering, setIsHovering] = React.useState(false);
  const ref = React.useRef(null);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  React.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, isHovering];
}

//use hook import { useHover } from "../hooks/useHover";

export function Listing() {
  const [ref, isHovering] = useHover();

  React.useEffect(() => {
    if (isHovering) {
      // Add logic here
    }
  }, [isHovering]);

  return (
    <div ref={ref}>
      <ListingCard />
    </div>
  );
}
