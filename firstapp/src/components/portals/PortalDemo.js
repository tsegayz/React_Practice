import  ReactDOM  from 'react-dom'


function PortalDemo() {
  return ReactDOM.createPortal
    (
        <div>PortalDemo</div>,
        document.getElementById("portal-root")
    )
   
}

export default PortalDemo;


/////////////////////// using portals allows us to render children components
// into a dom node that is different from the parent dom