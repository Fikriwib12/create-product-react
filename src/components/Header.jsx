import React from 'react'
// import Logo from "./bootstrap-logo.png";

const Header = () => {
    const article = {
        title: {
            id: "Buat Akun",
            en: "Create Account"
          },
          description: {
            id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
            en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
          }
      };

  return (
    <div>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* <img src={Logo} alt="Bootstrap" /> */}
                        <h1>{article.title.en}</h1>
                        <p>{article.description.en}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header