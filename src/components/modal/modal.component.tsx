import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import MovieDetails from '../movie-details/movie-details.component'
import useFetch from '../../custom-hooks/useFetch';
import './modal.style.scss';
import { IMovieDetails } from '../../interfaces/movie-details';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const DetailsModal: React.FC<any> = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<IMovieDetails>({});

  const featchModalData = async () => {
    if (props.isOpen) {
      const url = `http://www.omdbapi.com/?i=${props.itemId}&apikey=e8822b76`;
      const response = await axios.post(url);
      setData(response.data);
    }
  }

  useEffect(() => {
    setIsOpen(props.isOpen);
    featchModalData();
  }, [props.isOpen]);

  const closeModal = () => {
    props.closeModal();
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        appElement={document.getElementById('root') as HTMLElement}
      >
        <MovieDetails {...data} />
      </Modal>
    </div>
  );
}

export default DetailsModal;