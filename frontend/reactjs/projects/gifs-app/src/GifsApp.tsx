import { useState } from 'react';
import { CustomHeader } from './shared/components/CustomHeader';
import { CustomSearchBar } from './shared/components/CustomSearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifsList } from './gifs/components/GifsList';
import { mockGifs } from './mock-data/gifs.mock';

export const GifsApp = () => {

  const [previusTerms, setPreviusTerms] = useState(['Dragon Ball Z']);

  const handleTermCLiked = ( term: string ) => {
    console.log({term});
  }

  return (
    <>
      <CustomHeader 
        title="Buscador de Gifs" 
        description="Descubre y comparte el gif perfecto" 
      />
      
      <CustomSearchBar placeholder="Busca tu gif" />

      <PreviousSearches 
        searches={previusTerms} 
        onLabelCLiked={handleTermCLiked}
      />

      <GifsList gifs={mockGifs} />

    </>
  )
}
