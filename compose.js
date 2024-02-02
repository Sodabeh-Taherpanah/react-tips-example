function MyComponentData(props) {
  let StyledMyComponent = compose(
    withStyle(style),
    withTranslation('translation'),
    withMyApi()
  )(MyComponent);
  return (
    <MyContextProvider>
      <StyledMyComponent />
    </MyContextProvider>
  );
}


actually compose is merge two functions:
const compose= (f,g)=>(a)=>f(g(a))
const sum=(a)=>a+3
const result=compose(sum,sum)(4)
result-->10
