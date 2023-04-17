


function Sample({veggie}) {

    if(veggie === 'meatball') {
        throw new Error('not a veggie')
    }
  return (
    <div>
        {veggie}
    </div>
  )
}

export default Sample;
