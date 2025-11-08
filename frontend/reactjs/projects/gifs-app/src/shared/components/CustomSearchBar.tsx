interface Props {
  placeholder?: string;
}


export const CustomSearchBar = ({ placeholder= 'Buscar' }: Props) => {
  return (
    <div className='search-container'>
        <input type="text"  placeholder={ placeholder }/>
        <button>Buscar</button>
    </div>
  )
}
