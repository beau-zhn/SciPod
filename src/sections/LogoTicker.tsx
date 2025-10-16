import spotifyLogo from '@/assets/logo-spotify.png'
import youtubeLogo from'@/assets/logo-youtube.png'
import googleLogo from '@/assets/logo-google.png'
import appleLogo from '@/assets/logo-apple-podcasts.png'
import amazonLogo from '@/assets/logo-amazon.png'


export const LogoTicker = () => {
  return <section>
    <div className="container">
      <div>
        <h2> Tuned in by the curious. Inspired by </h2>
        <div>
              {[spotifyLogo, 
              youtubeLogo, 
              googleLogo, 
              appleLogo,amazonLogo,
            ].map((logo) => (
                 <img src={logo.src} key={logo.src} className='' />
              ))}
        </div>
      </div>
    </div>
  </section>;
};
