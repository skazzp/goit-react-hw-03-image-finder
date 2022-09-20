import { ModalPic, Overlay } from './Modal.styled';

// const Modal = ({ toggleModal, largeImageURL }) => {
//   return (
//     <Overlay>
//       <ModalPic>
//         <img src={largeImageURL} alt="" />
//       </ModalPic>
//     </Overlay>
//   );
// };

// export default Modal;
import { Component } from 'react';

// const modalContainer = document.getElementById('modal');

class Modal extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    // console.log(this.modalRef.current);
    // const modalImage = this.modalRef.current;
    window.addEventListener('keydown', this.handleClose);
    // modalImage.addEventListener("load", loadingImage);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  loadingImage = () => {
    console.log('LOADED!!');
    this.setState({ isLoading: false });
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <Overlay onClick={this.handleClose}>
        <ModalPic>
          <img src={largeImageURL} alt="" />
        </ModalPic>
      </Overlay>
    );
  }
}

export default Modal;
