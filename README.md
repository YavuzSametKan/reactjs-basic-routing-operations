# React Router İşlemleri
Bu repo, React uygulamalarında temel yönlendirme işlemlerini gerçekleştirmek için kullanılan örnek bir rehberdir. Öğrendiklerimi tekrar etmek amaçlı unuttuğum esnada kodlara bakmam için üretilmiştir.

[Live Demo İçin Tıklayın.](https://yavuzsametkan.github.io/reactjs-basic-routing-operations)

### React Router Nedir?

React Router, React tabanlı web uygulamalarında sayfa yönlendirmesi ve gezinme için kullanılan bir kütüphanedir. React Router, tek sayfa uygulamalarının (SPA) çoklu sayfa gibi davranmasını sağlar. Geleneksel çok sayfalı web uygulamalarında, her bağlantı veya sayfa değişikliği genellikle sunucuya yeni bir istek gönderir ve tam bir sayfa yenilenmesi gerektirir. Ancak, tek sayfa uygulamalarında, tüm sayfa içeriği bir kez yüklendikten sonra, sayfa yenilemeden veya sunucuya ek isteklerde bulunmadan, kullanıcı etkileşimleri aracılığıyla içeriği güncellemek mümkündür.

React Router, URL'lerin belirli bileşenlere (sayfalara) eşlenmesini sağlar. Bu, kullanıcının URL'yi değiştirdiğinde veya bir bağlantıya tıkladığında, belirli bir bileşenin yükleneceği anlamına gelir. React Router, genellikle BrowserRouter, Route, Switch, Link gibi bileşenlerden oluşur.

>BrowserRouter: Uygulamanın genelinde tarayıcı URL'sini senkronize eder ve React Router'ın çalışmasını sağlar.

>Route: Belirli bir URL yolunu bir bileşenle eşler. Yol eşleştiğinde, belirtilen bileşen render edilir.

>Switch: İlk eşleşen Route'u render eder ve daha fazla eşleşme yapmaz. Bu, çoklu yol eşleştirmelerinde istenmeyen davranışları önler.

>Link: Tarayıcıda gezinme için bir bağlantı oluşturur. Sayfalar arasında geçiş yapmak için kullanılır.

React Router, dinamik URL parametreleri, gömülü rotalar, geçiş animasyonları ve daha fazlasını destekler. Bu sayede, modern web uygulamalarında kullanıcı deneyimini geliştirmek için güçlü bir araçtır.

React router hakkında daha fazla bilgi için [resmi dökümanı](https://reactrouter.com/en/main) inceleyebilirsiniz.  
