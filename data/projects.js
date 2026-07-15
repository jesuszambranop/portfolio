// Fuente: PORTFOLIO.xlsx.
// Para agregar una miniatura, sube la imagen a assets/work-thumbnails/<cliente>/
// y coloca la ruta en thumbnail. Si thumbnail queda vacío, la web muestra un placeholder.
const portfolioClients = [
  {
    name: "ONCO",
    slug: "onco",
    works: [
      { title: "Reel 01", type: "Reel", url: "https://www.instagram.com/reel/CvOWpa3rQAs/", thumbnail: "assets/work-thumbnails/ONCO/reel-01.jpg", thumbnailHint: "assets/work-thumbnails/ONCO/reel-01.jpg" },
      { title: "Reel 02", type: "Reel", url: "https://www.instagram.com/reel/CwnHobfL0M0/", thumbnail: "assets/work-thumbnails/ONCO/reel-02.jpg", thumbnailHint: "assets/work-thumbnails/ONCO/reel-02.jpg" },
      { title: "Reel 03", type: "Reel", url: "https://www.instagram.com/reel/CzZGl-krJ_3/", thumbnail: "assets/work-thumbnails/ONCO/reel-03.jpg", thumbnailHint: "assets/work-thumbnails/ONCO/reel-03.jpg" },
      { title: "Reel 04", type: "Reel", url: "https://www.instagram.com/reel/C0CEEZ9rjT7/", thumbnail: "assets/work-thumbnails/ONCO/reel-04.jpg", thumbnailHint: "assets/work-thumbnails/ONCO/reel-04.jpg" },
      { title: "Reel 05", type: "Reel", url: "https://www.instagram.com/reel/C1hXKSQrPcO/", thumbnail: "", thumbnailHint: "assets/work-thumbnails/onco/reel-05.jpg" }
    ]
  },
  {
    name: "FORESTEA",
    slug: "forestea",
    works: [
      { title: "Post 01", type: "Post", url: "https://www.instagram.com/p/CtHv7EHu82v/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-01.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-01.jpg" },
      { title: "Post 02", type: "Post", url: "https://www.instagram.com/p/CtencajtT6Z/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-02.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-02.jpg" },
      { title: "Post 03", type: "Post", url: "https://www.instagram.com/p/CthAhWcO_3Q/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-03.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-03.jpg" },
      { title: "Post 04", type: "Post", url: "https://www.instagram.com/p/Ctjl332u5or/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-04.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-04.jpg" },
      { title: "Post 05", type: "Post", url: "https://www.instagram.com/p/CtmLiFfofFh/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-05.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-05.jpg" },
      { title: "Post 06", type: "Post", url: "https://www.instagram.com/p/CtoYs3lOzQU/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-06.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-06.jpg" },
      { title: "Post 07", type: "Post", url: "https://www.instagram.com/p/CtomBlpx3kB/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-07.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-07.jpg" },
      { title: "Post 08", type: "Post", url: "https://www.instagram.com/p/CtrYj6svAYW/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-08.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-08.jpg" },
      { title: "Post 09", type: "Post", url: "https://www.instagram.com/p/Ctt8CTZBVqM/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-09.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-09.jpg" },
      { title: "Post 10", type: "Post", url: "https://www.instagram.com/p/Ctw2vaOP57n/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-10.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-10.jpg" },
      { title: "Post 11", type: "Post", url: "https://www.instagram.com/p/CuC9dP2IlrV/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-11.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-11.jpg" },
      { title: "Post 12", type: "Post", url: "https://www.instagram.com/p/CuFnZ1ZJUwe/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-12.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-12.jpg" },
      { title: "Post 13", type: "Post", url: "https://www.instagram.com/p/CuPU0Qxo3Kv/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-13.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-13.jpg" },
      { title: "Post 14", type: "Post", url: "https://www.instagram.com/p/CuSzzNBLvOf/?hl=es", thumbnail: "assets/work-thumbnails/FORESTEA/post-14.jpg", thumbnailHint: "assets/work-thumbnails/FORESTEA/post-14.jpg" },
      { title: "Post 15", type: "Post", url: "https://www.instagram.com/p/CuUeaHuNwIm/?hl=es", thumbnail: "", thumbnailHint: "assets/work-thumbnails/forestea/post-15.jpg" }
    ]
  },
  {
    name: "RODRIGO APARICIO",
    slug: "rodrigo-aparicio",
    works: [
      { title: "Reel 01", type: "Reel", url: "https://www.instagram.com/reel/Cvvq7fEN-96/", thumbnail: "assets/work-thumbnails/rodrigo-aparicio/reel-01.JPG", thumbnailHint: "assets/work-thumbnails/rodrigo-aparicio/reel-01.JPG" },
      { title: "Reel 02", type: "Reel", url: "https://www.instagram.com/reel/Cwim9UkssEc/", thumbnail: "assets/work-thumbnails/rodrigo-aparicio/reel-02.JPG", thumbnailHint: "assets/work-thumbnails/rodrigo-aparicio/reel-02.JPG" },
      { title: "Reel 03", type: "Reel", url: "https://www.instagram.com/reel/ClEpBxHgndn/", thumbnail: "assets/work-thumbnails/rodrigo-aparicio/reel-03.JPG", thumbnailHint: "assets/work-thumbnails/rodrigo-aparicio/reel-03.JPG" },
      { title: "Reel 04", type: "Reel", url: "https://www.instagram.com/reel/C3EB4ApK6G_/", thumbnail: "assets/work-thumbnails/rodrigo-aparicio/reel-04.JPG", thumbnailHint: "assets/work-thumbnails/rodrigo-aparicio/reel-04.JPG" },
      { title: "Reel 05", type: "Reel", url: "https://www.instagram.com/reel/DA3vn6bK2Dx/", thumbnail: "assets/work-thumbnails/rodrigo-aparicio/reel-05.JPG", thumbnailHint: "assets/work-thumbnails/rodrigo-aparicio/reel-05.JPG" },
      { title: "Reel 06", type: "Reel", url: "https://www.instagram.com/reel/DA6ZQO8v0w8/", thumbnail: "assets/work-thumbnails/rodrigo-aparicio/reel-06.JPG", thumbnailHint: "assets/work-thumbnails/rodrigo-aparicio/reel-06.JPG" },
      { title: "Reel 07", type: "Reel", url: "https://www.instagram.com/reel/DLxYO-8gpsb/", thumbnail: "assets/work-thumbnails/rodrigo-aparicio/reel-07.JPG", thumbnailHint: "assets/work-thumbnails/rodrigo-aparicio/reel-07.JPG" }
    ]
  },
  {
    name: "GUAYAMAN",
    slug: "guayaman",
    works: [
      { title: "Post 01", type: "Post", url: "https://www.instagram.com/p/C92zUgIOjgK/", thumbnail: "assets/work-thumbnails/guayaman/post-01.JPG", thumbnailHint: "assets/work-thumbnails/guayaman/post-01.JPG" },
      { title: "Post 02", type: "Post", url: "https://www.instagram.com/p/C9215fUSrwJ/", thumbnail: "assets/work-thumbnails/guayaman/post-02.JPG", thumbnailHint: "assets/work-thumbnails/guayaman/post-02.JPG" },
      { title: "Post 03", type: "Post", url: "https://www.instagram.com/p/C922NOlywAT/", thumbnail: "assets/work-thumbnails/guayaman/post-03.JPG", thumbnailHint: "assets/work-thumbnails/guayaman/post-03.JPG" },
      { title: "Post 04", type: "Post", url: "https://www.instagram.com/p/C922vMQy1ok/", thumbnail: "assets/work-thumbnails/guayaman/post-04.JPG", thumbnailHint: "assets/work-thumbnails/guayaman/post-04.JPG" },
      { title: "Post 05", type: "Post", url: "https://www.instagram.com/p/C923Ge1yjP6/", thumbnail: "assets/work-thumbnails/guayaman/post-05.JPG", thumbnailHint: "assets/work-thumbnails/guayaman/post-05.JPG" },
      { title: "Post 06", type: "Post", url: "https://www.instagram.com/p/C93TEVgMHK4/", thumbnail: "assets/work-thumbnails/guayaman/post-06.JPG", thumbnailHint: "assets/work-thumbnails/guayaman/post-06.JPG" },
      { title: "Post 07", type: "Post", url: "https://www.instagram.com/p/C96FEa_OLQ5/", thumbnail: "assets/work-thumbnails/guayaman/post-07.JPG", thumbnailHint: "assets/work-thumbnails/guayaman/post-07.JPG" },
      { title: "Post 08", type: "Post", url: "https://www.instagram.com/p/C-GFx9Ix1rp/", thumbnail: "assets/work-thumbnails/guayaman/post-08.JPG", thumbnailHint: "assets/work-thumbnails/guayaman/post-08.JPG" }
    ]
  },
  {
    name: "BSC",
    slug: "bsc",
    works: [
      { title: "Reel 01", type: "Reel", url: "https://www.instagram.com/reel/C07rykjOgS-/?igsh=MWN5dzZqb2p4aWox", thumbnail: "assets/work-thumbnails/bsc/reel-01.JPG", thumbnailHint: "assets/work-thumbnails/bsc/reel-01.JPG" },
      { title: "Post 01", type: "Post", url: "https://www.instagram.com/p/Cylc1SruenN/", thumbnail: "assets/work-thumbnails/bsc/reel-02.JPG", thumbnailHint: "assets/work-thumbnails/bsc/reel-02.JPG" },
      { title: "Post 02", type: "Post", url: "https://www.instagram.com/p/CyrY71krhPH/", thumbnail: "assets/work-thumbnails/bsc/reel-03.JPG", thumbnailHint: "assets/work-thumbnails/bsc/reel-03.JPG" },
      { title: "Post 03", type: "Post", url: "https://www.instagram.com/p/Cvz8DCcAfeL/", thumbnail: "assets/work-thumbnails/bsc/reel-04.JPG", thumbnailHint: "assets/work-thumbnails/bsc/reel-04.JPG" },
      { title: "Post 04", type: "Post", url: "https://www.instagram.com/p/CzHJoj_ufQH/", thumbnail: "assets/work-thumbnails/bsc/reel-05.JPG", thumbnailHint: "assets/work-thumbnails/bsc/reel-05.JPG" },
      { title: "Post 05", type: "Post", url: "https://www.instagram.com/p/CyMRbzkOCOT/", thumbnail: "assets/work-thumbnails/bsc/reel-06.JPG", thumbnailHint: "assets/work-thumbnails/bsc/reel-06.JPG" }
    ]
  },
  {
    name: "GRUPO JORDAN Y DRK",
    slug: "grupo-jordan-drk",
    works: [
      { title: "Post 01", type: "Post", url: "https://www.instagram.com/p/DG3pG31Rkj-/?hl=es", thumbnail: "assets/work-thumbnails/grupo-jordan-drk/post-01.JPG", thumbnailHint: "assets/work-thumbnails/grupo-jordan-drk/post-01.JPG" },
      { title: "Post 02", type: "Post", url: "https://www.instagram.com/p/C8mgR9fMep1/?hl=es", thumbnail: "assets/work-thumbnails/grupo-jordan-drk/post-02.JPG", thumbnailHint: "assets/work-thumbnails/grupo-jordan-drk/post-02.JPG" },
      { title: "Post 03", type: "Post", url: "https://www.instagram.com/p/C92Wo27OcvU/?hl=es", thumbnail: "assets/work-thumbnails/grupo-jordan-drk/post-03.JPG", thumbnailHint: "assets/work-thumbnails/grupo-jordan-drk/post-03.JPG" },
      { title: "Reel 01", type: "Reel", url: "https://www.instagram.com/reel/Ctosl_iviyQ/?hl=es-la", thumbnail: "assets/work-thumbnails/grupo-jordan-drk/reel-01.JPG", thumbnailHint: "assets/work-thumbnails/grupo-jordan-drk/reel-01.JPG" }
    ]
  },
  {
    name: "INMOBILIARIA",
    slug: "inmobiliaria",
    works: [
      { title: "Post 01", type: "Post", url: "https://www.instagram.com/p/DNTmF33yWKG/?hl=es-la&img_index=1", thumbnail: "assets/work-thumbnails/inmobiliaria/post-01.JPG", thumbnailHint: "assets/work-thumbnails/inmobiliaria/post-01.JPG" },
      { title: "Post 02", type: "Post", url: "https://www.instagram.com/p/DNZCgiySOAY/?hl=es-la&img_index=1", thumbnail: "assets/work-thumbnails/inmobiliaria/post-02.JPG", thumbnailHint: "assets/work-thumbnails/inmobiliaria/post-02.JPG" },
      { title: "Post 03", type: "Post", url: "https://www.instagram.com/p/DNq5nbNyxzp/?hl=es-la&img_index=1", thumbnail: "assets/work-thumbnails/inmobiliaria/post-03.JPG", thumbnailHint: "assets/work-thumbnails/inmobiliaria/post-03.JPG" },
      { title: "Post 04", type: "Post", url: "https://www.instagram.com/p/DOGxpnnAFSR/?hl=es-la&img_index=1", thumbnail: "assets/work-thumbnails/inmobiliaria/post-04.JPG", thumbnailHint: "assets/work-thumbnails/inmobiliaria/post-04.JPG" },
      { title: "Post 05", type: "Post", url: "https://www.instagram.com/p/DPE2nb6kSG1/?hl=es-la&img_index=1", thumbnail: "assets/work-thumbnails/inmobiliaria/post-05.JPG", thumbnailHint: "assets/work-thumbnails/inmobiliaria/post-05.JPG" },
      { title: "Post 06", type: "Post", url: "https://www.instagram.com/p/DRE5A8jgCO4/?hl=es-la&img_index=1", thumbnail: "assets/work-thumbnails/inmobiliaria/post-06.JPG", thumbnailHint: "assets/work-thumbnails/inmobiliaria/post-06.JPG" },
      { title: "Post 07", type: "Post", url: "https://www.instagram.com/p/DRE5r2lAL3O/?hl=es-la", thumbnail: "assets/work-thumbnails/inmobiliaria/post-07.JPG", thumbnailHint: "assets/work-thumbnails/inmobiliaria/post-07.JPG" },
      { title: "Post 08", type: "Post", url: "https://www.instagram.com/p/DR2o7aEEkpq/?hl=es-la", thumbnail: "assets/work-thumbnails/inmobiliaria/post-08.JPG", thumbnailHint: "assets/work-thumbnails/inmobiliaria/post-08.JPG" },
      { title: "Post 09", type: "Post", url: "https://www.instagram.com/p/DZxa6u0vLBw/?hl=es-la", thumbnail: "assets/work-thumbnails/inmobiliaria/post-09.JPG", thumbnailHint: "assets/work-thumbnails/inmobiliaria/post-09.JPG" },
      { title: "Post 10", type: "Post", url: "https://www.instagram.com/p/DZ0F2GgPQzu/?hl=es-la", thumbnail: "assets/work-thumbnails/inmobiliaria/post-10.JPG", thumbnailHint: "assets/work-thumbnails/inmobiliaria/post-10.JPG" },
      { title: "Post 11", type: "Post", url: "https://www.instagram.com/p/DZ3GpipFlol/?hl=es-la&img_index=1", thumbnail: "assets/work-thumbnails/inmobiliaria/post-11.JPG", thumbnailHint: "assets/work-thumbnails/inmobiliaria/post-11.JPG" }
    ]
  }
];
