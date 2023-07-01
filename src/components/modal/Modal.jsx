import CloseIcon from '@public/assets/icons/CloseIcon';

const Modal = ({shouldShow, setShouldShow, children}) => {
  return (
    <>
       { shouldShow && (
          <div tabIndex="-1" className="bg-gray-950 opacity-95 fixed top-0 left-0 right-0 h-full w-full flex items-start justify-center z-100">
               <div className="relative w-full  max-w-4xl max-h-full top-6 overflow-x-auto overflow-y-auto">
                   <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal Header */}
                        <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <button type="button" 
                           onClick={() => setShouldShow(false)} 
                           class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
                            rounded-lg text-sm p-1.5 mr-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="staticModal">
                            close
                          <CloseIcon/>
                        </button>

                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                           content
                        </h3>
                        </div>

                        {/* Modal body */}
                         <div className="p-6 text-center">
                           {children}
                        </div>
                    </div>
                </div>
             </div>
            )
       }
    </>
  )
}

export default Modal
