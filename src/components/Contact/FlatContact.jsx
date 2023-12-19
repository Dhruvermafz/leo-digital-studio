import React from 'react'
import contact from "../../assets/images/img-box/contact-1.png" 
const FlatContact = () => {
  return (
    <section className="tf-section flat-contact-us">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-5">
                <div className="box-images">
                    <div className="images">
                        <img src={contact} alt=""/>                                
                    </div> 
                    <div className="mark-contact absolute animate-zoom">
                        <svg width="651" height="651" viewBox="0 0 651 651" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="325.5" cy="325.5" r="325.5" fill="#FFF4E7"/>
                        </svg>
                    </div>                          
                </div>
            </div>
            <div className="col-lg-6 col-md-7">
                <div className="box">
                    <div className="heading-section style3">
                        <h6 className="" >Contact Us</h6>
                        <h2 className="text-unset">Feel Free to Contact With Us. We’re Ready to  Help you</h2>  
                        <p className="p-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae</p> 
                    </div> 
                  
                    <div className="info-box">
                        <div className="info flex">
                            <div className="icon">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_105_4775)">
                                    <path d="M28.154 4.16191H5.88357C4.86568 4.16191 4.03758 4.99002 4.03758 6.00791V6.26197H3.86479C2.84689 6.26197 2.01879 7.09008 2.01879 8.10797V8.36197H1.846C0.828105 8.36197 0 9.19013 0 10.208V14.0424C0 14.2852 0.196758 14.4819 0.439453 14.4819C0.682148 14.4819 0.878906 14.2852 0.878906 14.0424V11.1228L9.86027 18.3137L0.878906 23.2491V15.9576C0.878906 15.7148 0.682148 15.5181 0.439453 15.5181C0.196758 15.5181 0 15.7148 0 15.9576V23.9921C0 25.01 0.828105 25.8381 1.846 25.8381H24.1164C25.1318 25.8381 25.9582 25.014 25.9622 23.9995C25.9623 23.9972 25.9624 23.9949 25.9624 23.9926C25.9624 23.9924 25.9624 23.9923 25.9624 23.9921V23.7381H26.1352C27.1531 23.7381 27.9812 22.91 27.9812 21.8921V21.6381H28.154C29.1719 21.6381 30 20.81 30 19.7921V6.00791C30 4.99002 29.1719 4.16191 28.154 4.16191ZM25.9624 10.208C25.9624 10.1205 25.9559 10.0345 25.944 9.95009L27.1023 9.02273V18.6787V18.6818V21.149L25.9624 20.5226V10.208ZM27.9812 8.10797C27.9812 8.02043 27.9746 7.93441 27.9628 7.8501L29.1211 6.92273V19.0491L27.9812 18.4227V8.10797ZM3.86479 7.14088H18.9713C19.214 7.14088 19.4108 6.94418 19.4108 6.70142C19.4108 6.45867 19.214 6.26197 18.9713 6.26197H4.91648V6.00791C4.91648 5.47465 5.35031 5.04082 5.88357 5.04082H28.154C28.6204 5.04082 29.0108 5.37263 29.1013 5.81267L27.6137 7.00377C27.2767 6.55377 26.7394 6.26197 26.1352 6.26197H20.8866C20.6439 6.26197 20.4471 6.45867 20.4471 6.70142C20.4471 6.94418 20.6439 7.14088 20.8866 7.14088H26.1352C26.6016 7.14088 26.992 7.47269 27.0825 7.91273L25.5949 9.10377C25.2579 8.65371 24.7206 8.36197 24.1164 8.36197H2.8977V8.10797C2.8977 7.5747 3.33152 7.14088 3.86479 7.14088ZM1.846 9.24088H24.1164C24.5828 9.24088 24.9732 9.57275 25.0637 10.0128L13.5976 19.193C13.2346 19.4835 12.7277 19.4835 12.3647 19.193L10.9222 18.038C10.9215 18.0374 10.9208 18.0369 10.9201 18.0363L0.898711 10.0128C0.989238 9.57275 1.37959 9.24088 1.846 9.24088ZM24.1164 24.9592H1.846C1.39664 24.9592 1.01783 24.6511 0.909785 24.2351L10.603 18.9084L11.8154 19.8791C12.1586 20.1539 12.5699 20.2912 12.9812 20.2912C13.3924 20.2912 13.8038 20.1538 14.1469 19.8791L15.3594 18.9084L19.4709 21.1678C19.5381 21.2047 19.6106 21.2222 19.6822 21.2222C19.8373 21.2222 19.9877 21.1399 20.0677 20.9943C20.1846 20.7816 20.1069 20.5144 19.8942 20.3975L16.1021 18.3136L25.0834 11.1227V20.7786V20.7817V23.249L21.5408 21.3022C21.3281 21.1853 21.0609 21.263 20.944 21.4757C20.8271 21.6885 20.9048 21.9556 21.1175 22.0725L25.0513 24.2343C24.9435 24.6506 24.5658 24.9592 24.1164 24.9592ZM26.1352 22.8591H25.9624V21.5256L27.0714 22.135C26.9634 22.551 26.5846 22.8591 26.1352 22.8591ZM28.154 20.7591H27.9812V19.4256L29.0902 20.035C28.9822 20.451 28.6034 20.7591 28.154 20.7591Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_105_4775">
                                    <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="content">
                                <h6 className="sub-title fw-4">Email Address</h6>
                                <div className="title-30 link-style-1"><a href="mailto:officialabhi1010@gmail.com">officialabhi1010@gmail.com</a></div>
                            </div>
                        </div>
                        <div className="info flex">
                            <div className="icon">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.8 12.0706C11.8349 12.0694 11.8697 12.0641 11.9035 12.0547C13.2659 11.6742 13.5169 10.8692 13.5377 9.3197L13.5388 9.29438C13.5759 8.43452 13.6181 7.45999 13.0127 6.86415C12.653 6.51013 12.1173 6.35128 11.4207 6.39265C10.7002 6.43513 9.85213 6.73372 9.20772 7.17177C8.01516 7.98112 7.32534 9.34694 7.07737 10.355C6.67453 11.9893 6.80239 14.1883 7.41932 16.2381C8.00578 18.2922 9.09487 20.2511 10.333 21.4787C11.0922 22.2312 12.4242 23.091 13.8857 23.2469C14.0482 23.2644 14.215 23.2729 14.383 23.2729C15.0364 23.2729 15.7087 23.1441 16.2239 22.9119C16.8735 22.619 17.2535 22.2451 17.3856 21.7689C17.603 20.9852 17.0657 20.2096 16.5462 19.4593L16.4834 19.3686C15.6309 18.0549 14.9839 17.4806 13.6199 17.7683C13.5853 17.7757 13.5517 17.7871 13.5199 17.8025C13.5192 17.8025 13.5186 17.8025 13.5179 17.8025C13.2904 17.8025 12.5102 17.1917 12.0106 15.9918C11.9009 15.7293 11.8008 15.4451 11.7131 15.1482C11.6257 14.8502 11.5571 14.559 11.5091 14.2817C11.2937 13.0543 11.6146 12.1771 11.8 12.0706ZM11.0835 11.5483C10.615 12.1045 10.4381 13.2641 10.6432 14.4326C10.6968 14.7418 10.7729 15.0658 10.87 15.3964C10.9668 15.7245 11.0777 16.0388 11.1994 16.3301C11.6625 17.4424 12.4465 18.3591 13.1504 18.6114C13.4574 18.7214 13.6915 18.6835 13.8486 18.6186C14.5684 18.4727 14.9116 18.5598 15.7496 19.8523C15.7519 19.8559 15.7543 19.8595 15.7567 19.863L15.8238 19.9598C16.2281 20.5435 16.6461 21.1471 16.5388 21.534C16.4815 21.7401 16.2541 21.9342 15.8627 22.1107C15.3494 22.3421 14.6277 22.4426 13.9793 22.373C12.7422 22.241 11.5753 21.4725 10.9519 20.8545C9.81539 19.7278 8.81051 17.9108 8.26377 15.994C8.26319 15.9919 8.26254 15.9898 8.26196 15.9878C7.68768 14.0813 7.56387 12.0542 7.9309 10.5652C8.1303 9.75417 8.71366 8.56929 9.7016 7.89886C10.2148 7.55005 10.9099 7.30319 11.4726 7.27003C11.5293 7.26669 11.5839 7.26505 11.6363 7.26505C11.9888 7.26505 12.244 7.34069 12.3963 7.49058C12.7232 7.81237 12.6915 8.54649 12.6608 9.25647L12.6594 9.28841C12.6592 9.2928 12.6591 9.2972 12.6591 9.30165C12.6399 10.7782 12.4109 10.9945 11.7135 11.1951C11.5354 11.2106 11.3011 11.2901 11.0835 11.5483Z" fill="white"/>
                                    <path d="M25.9506 6.38348H20.0176C19.7748 6.38348 19.5781 6.58024 19.5781 6.82294C19.5781 7.06563 19.7748 7.26239 20.0176 7.26239H25.9506C26.1934 7.26239 26.3901 7.06563 26.3901 6.82294C26.3901 6.58024 26.1933 6.38348 25.9506 6.38348Z" fill="white"/>
                                    <path d="M25.9506 8.70435H20.0176C19.7748 8.70435 19.5781 8.9011 19.5781 9.1438C19.5781 9.38649 19.7748 9.58325 20.0176 9.58325H25.9506C26.1934 9.58325 26.3901 9.38649 26.3901 9.1438C26.3901 8.9011 26.1933 8.70435 25.9506 8.70435Z" fill="white"/>
                                    <path d="M30 8.14102C30 6.88107 29.5516 5.67146 28.7033 4.64297C28.5489 4.4557 28.2719 4.42916 28.0846 4.58355C27.8974 4.73795 27.8708 5.01492 28.0252 5.20219C28.7422 6.07143 29.1211 7.08762 29.1211 8.14102C29.1211 11.0377 26.257 13.3943 22.7366 13.3943C22.0393 13.3943 21.3542 13.302 20.7005 13.1201C20.5669 13.0829 20.4233 13.111 20.3135 13.1961L18.7966 14.3717L18.9923 12.7339C19.0293 12.5573 18.9543 12.3742 18.8006 12.275C17.2446 11.2698 16.3522 9.76301 16.3522 8.14096C16.3522 5.24426 19.2162 2.88768 22.7367 2.88768C24.1818 2.88768 25.5456 3.27633 26.6805 4.01168C26.8841 4.14363 27.1563 4.08551 27.2883 3.88184C27.4203 3.67811 27.3622 3.40605 27.1584 3.27404C25.8809 2.44629 24.3519 2.00877 22.7367 2.00877C21.1391 2.00877 19.6607 2.44682 18.4601 3.18762C16.7474 2.39502 14.9146 1.99219 13.0079 1.99219C9.49377 1.99219 6.2018 3.37078 3.7384 5.87402C3.56818 6.04705 3.57041 6.32525 3.74338 6.49547C3.82898 6.57973 3.94031 6.62168 4.05158 6.62168C4.1652 6.62168 4.27881 6.57785 4.36482 6.49049C6.6617 4.15652 9.73119 2.87109 13.0079 2.87109C14.6165 2.87109 16.1684 3.17801 17.6316 3.7834C16.2998 4.89563 15.4732 6.43828 15.4732 8.14102C15.4732 9.98361 16.4241 11.6888 18.0924 12.8577L17.8488 14.8962C17.8468 14.9135 17.8457 14.9309 17.8457 14.9483V15.0518C17.8457 15.3008 17.9732 15.5136 18.1783 15.6073C18.2235 15.6279 18.3021 15.6552 18.4025 15.6552C18.5255 15.6552 18.681 15.6142 18.8476 15.47C18.8814 15.4402 18.9025 15.4209 18.9286 15.3971C18.9559 15.3722 18.9891 15.342 19.0532 15.285L20.6804 14.0237C21.3451 14.1894 22.0357 14.2733 22.7366 14.2733C23.5598 14.2733 24.3513 14.1568 25.0896 13.9429C25.12 14.295 25.1368 14.6487 25.1368 15.0001C25.1368 21.688 19.6958 27.129 13.0079 27.129C6.31992 27.129 0.878906 21.6879 0.878906 15C0.878906 12.4607 1.65439 10.0299 3.12152 7.97057C3.26232 7.77287 3.21627 7.49848 3.01857 7.35768C2.82094 7.21682 2.54654 7.26293 2.40568 7.46063C0.831855 9.66967 0 12.2767 0 15C0 18.4744 1.35293 21.7409 3.80953 24.1977C6.26631 26.6547 9.53303 28.0078 13.0079 28.0078C20.1805 28.0078 26.0157 22.1725 26.0157 15C26.0157 14.5484 25.9916 14.093 25.9447 13.6416C28.3451 12.6397 30 10.5506 30 8.14102Z" fill="white"/>
                                </svg>
                            </div>
                            <div className="content">
                                <h6 className="sub-title fw-4">Hotlines</h6>
                                <div className="title-30 link-style-1">
                                    <a href="tel:9416511010">Call +9416511010</a>
                               
                      </div>
                      <div className='title-30 link-style-1'>
                       <a href="tel:9416367707">Call +9416367707</a>
                      </div>
                      
                            </div>
                        </div>
                        <div className="info flex">
                            <div className="icon">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_105_4808)">
                                    <path d="M15.0009 5.46661C14.1794 5.46661 13.3887 5.71376 12.7143 6.18134C12.515 6.31956 12.4646 6.59443 12.6018 6.79529C12.739 6.99615 13.0118 7.04689 13.2111 6.90872C13.7387 6.54292 14.3576 6.34956 15.0009 6.34956C16.7443 6.34956 18.1627 7.77855 18.1627 9.53501C18.1627 11.2915 16.7443 12.7205 15.0009 12.7205C13.2575 12.7205 11.8392 11.2915 11.8392 9.53501C11.8392 9.01687 11.9586 8.52292 12.1941 8.06695C12.3058 7.85062 12.2224 7.58407 12.0077 7.47158C11.7929 7.35913 11.5285 7.4431 11.4168 7.65943C11.1199 8.23435 10.9629 8.88292 10.9629 9.53501C10.9629 11.7784 12.7744 13.6035 15.0009 13.6035C17.2275 13.6035 19.0389 11.7784 19.0389 9.53501C19.0389 7.29169 17.2275 5.46661 15.0009 5.46661Z" fill="white"/>
                                    <path d="M29.9663 29.3889L25.6419 18.9203C25.5739 18.7557 25.4144 18.6485 25.2374 18.6485H20.928C21.7662 17.506 22.4639 16.368 23.0087 15.2507C23.9744 13.2706 24.4639 11.3476 24.4639 9.53508C24.4639 4.2774 20.2184 0 15 0C9.78155 0 5.53608 4.2774 5.53608 9.53502C5.53608 11.3476 6.02563 13.2706 6.99126 15.2507C7.53606 16.368 8.23374 17.506 9.07198 18.6484H4.76259C4.58563 18.6484 4.42602 18.7557 4.35811 18.9202L1.41132 26.0538C1.31833 26.2789 1.42403 26.5373 1.64745 26.6309C1.70253 26.654 1.75948 26.665 1.81561 26.665C1.98729 26.665 2.15024 26.5627 2.22026 26.393L2.64073 25.3751H5.6235L4.0778 29.1171H1.09509L1.54315 28.0323C1.63614 27.8072 1.53044 27.5488 1.30702 27.4552C1.08349 27.3613 0.827079 27.468 0.734149 27.693L0.033661 29.3889C-0.0226476 29.5252 -0.00764762 29.6808 0.0736805 29.8035C0.154891 29.9262 0.291649 30 0.438134 30H29.5618C29.7082 30 29.845 29.9262 29.9263 29.8035C30.0076 29.6808 30.0226 29.5252 29.9663 29.3889ZM6.41241 9.53502C6.41241 4.7642 10.2648 0.882891 15 0.882891C19.7352 0.882891 23.5875 4.76426 23.5875 9.53502C23.5875 11.5356 22.8976 14.7325 19.706 18.8064C19.7028 18.8102 19.6999 18.8142 19.6968 18.8181C19.5338 19.026 19.3645 19.236 19.1882 19.4484C17.4344 21.5614 15.6596 23.1044 14.9999 23.6526C14.3422 23.1063 12.5758 21.5711 10.8232 19.4621C10.6425 19.2446 10.4691 19.0297 10.3023 18.817C10.2996 18.8136 10.2971 18.8101 10.2943 18.8067C7.10282 14.7331 6.41241 11.5363 6.41241 9.53502ZM5.05479 19.5313H8.03763L6.94966 22.165H3.96688L5.05479 19.5313ZM7.61698 29.1171L10.3557 22.4873L18.1495 29.1171H7.61698ZM19.5079 29.1171L10.4638 21.4237C10.3571 21.3329 10.2136 21.2988 10.078 21.332C9.94233 21.3651 9.8303 21.4615 9.77669 21.5914L6.66788 29.1171H5.02702L6.68499 25.1033C6.7413 24.967 6.7263 24.8115 6.64497 24.6887C6.56376 24.566 6.42694 24.4922 6.28046 24.4922H3.00559L3.6022 23.0479H7.24192C7.41888 23.0479 7.57849 22.9406 7.64639 22.776L8.98679 19.5313H9.74722C9.87923 19.6971 10.0134 19.863 10.1512 20.0288C12.412 22.7493 14.6382 24.4959 14.7318 24.569C14.8108 24.6306 14.9054 24.6613 15 24.6613C15.0945 24.6613 15.1892 24.6305 15.2681 24.569C15.3196 24.5289 16.0156 23.9825 17.0067 23.0479H21.9685C22.2105 23.0479 22.4067 22.8503 22.4067 22.6065C22.4067 22.3627 22.2105 22.165 21.9685 22.165H17.9098C18.5173 21.5496 19.1813 20.8321 19.8488 20.0289C19.9866 19.863 20.1208 19.6972 20.2528 19.5313H24.9451L26.0331 22.165H23.7211C23.4791 22.165 23.283 22.3627 23.283 22.6065C23.283 22.8503 23.4791 23.0479 23.7211 23.0479H26.3977L26.9943 24.4922H17.9668C17.7839 24.4922 17.6203 24.6066 17.5563 24.7792C17.4924 24.9519 17.5415 25.1463 17.6796 25.2671L22.0819 29.1171H19.5079ZM23.4188 29.1171L19.14 25.3752H27.3591L28.9049 29.1171H23.4188Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_105_4808">
                                    <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="content">
                                <h6 className="sub-title fw-4">Locations</h6>
                                <div className="title-30">2058 sector-1 housing board colony near jaat bhawan Rohtak Haryana 124001</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</section>
  )
}

export default FlatContact
