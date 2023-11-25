//custom hook : useIsMounted

import { useCallback, useEffect, useRef } from "react";

export function useIsMounted() {
  const isMountedRef = useRef(true);
  const isMounted = useCallback(() => isMountedRef.current, []);

  useEffect(() => {
    return () => void (isMountedRef.current = false);
  }, []);

  return isMounted;
}


//usage 
function ComponentA() {
  const [data, setData] = React.useState()
  const isMounted = useIsMounted()

  React.useEffect(() => {
    //for example we can fetch().then((data) => {
      // at this point the component may already have been removed from the tree by a flag from the parent or moved to another page
      //So we need to check first before updating the component state
      if (isMounted()) {
        setData(data)
     // }
    })
  }, [...])

  return ( <div> componenA </div>)
}
