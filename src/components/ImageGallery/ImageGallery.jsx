import { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { fetchGallery } from "Services/api";
import { Button } from "components/Button/Button";
import { Dna } from 'react-loader-spinner';
import styled from "./ImageGallery.module.css"


const IMAGES_PER_PAGE = 12;

export class ImageGallery extends Component {
    state = {
      images: [],
      currentPage: 1,
      isLoading: false,
    }

     componentDidUpdate(prevProps) {
  if (this.props.query !== prevProps.query && this.props.query !== "") {
    this.fetchImages(); 
  }
}

    fetchImages = async () => {
      const { query } = this.props;
      const { currentPage, images } = this.state;
      
      this.setState({ isLoading: true });
      
      try {
      const data = await fetchGallery(query, currentPage, IMAGES_PER_PAGE);
        this.setState({
          images: [...images, ...data.hits],
          currentPage: currentPage + 1,
        })
    } catch (error) {
      console.error('Error fetching images:', error);
      } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    this.fetchImages();
  };
  
  
  resetSearch = () => this.setState({images: [], page: 1, isLoading: true })
  
    render() {
        const { images, isLoading } = this.state;
      return (
        <>
        <ul className={styled.imageGallery}>
          {images.map((image) => (<ImageGalleryItem key={image.id} image={image} />
          ))}
          </ul>
          {isLoading && ( 
          <div className="loader">
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              />
          </div>
        )}
        {!isLoading && ( 
          <Button onClick={this.handleLoadMore} showButton={images.length > 0} />
        )}
          </>
      );
    }
}