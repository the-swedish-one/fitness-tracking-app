import "./globals.css"

export const metadata = {
    title: "Fitness-tracker"
};
  
const RootLayout = ({children}) => {
  return (
      <html lang="en">
          <body>
              <main className="app">
                  {children}
            </main>
          </body>
          
    </html>
  )
}

export default RootLayout;