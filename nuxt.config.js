export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cams_web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdn.bootcss.com/social-share.js/1.0.16/css/share.min.css' },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "//at.alicdn.com/t/font_3383084_icc8728dom.css" // 引入 ‘阿里图标库’ (FontClass 仅支持纯色)
      },
    ],

    script: [
      // { src: '/js/qrcode.min.js' },
      // { src: 'https://www.yuanian.com/skin/js/jquery-1.9.1.js' },
      {
        src: "/js/flexible.js", type: 'text/javascript', charset: 'utf-8'
      },
      { src: '/js/jquery.js' },
      { src: "https://ssl.captcha.qq.com/TCaptcha.js" },
      // { src: '/js/wxLogin.js' }
      // { src: '/js/lazyload.js' },
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/reset.css',
    '@/static/css/common.less', // 全局样式添加在此处
    'swiper/css/swiper.css',
  ],
  //自定义进度条颜色
  // loading: { color: '#fa6725', height: '2px' }, // loading:false,//禁用
  loading:false,
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

    // '@/plugins/router',//全局路由守卫配置
    { src: '@plugins/lib-flexible.js', ssr: false }, //不设置会报错
    { src: "@/plugins/axios.js" }, // api请求封装
    { src: '@/plugins/aos.js', ssr: false },
    { src: "@/plugins/vue-swiper.js", ssr: false },
    { src: '@/plugins/vue-social-share', ssr: false },
    { src: '@/plugins/filters.js', ssr: true },
    { src: '@/plugins/lazyload', ssr: true },
    { src: '@/plugins/pdf.js', ssr: false },
    { src: '@/plugins/vant.js', ssr: true },
    { src: '@/plugins/touch.js', ssr: false }

    // { src: '@/plugins/map.js', ssr: false },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',//服务端不能使用localStorage和cookie的解决方法
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // const baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // 服务端访问前缀
    // baseURL: 'https://develop.chinamas.cn',
    // 客户端访问前缀
    // browserBaseURL: "",
    proxy: true,//是否允许跨域 开启代理
    // prefix: '/api', //表示给请求url加个前缀 /api
    credentials: true,// 表示跨域请求时是否需要使用凭证
  },
  // proxy: {
  //   '/api': {
  //     target: 'https://develop.chinamas.cn', // 目标服务器ip
  //     changeOrigin: true, // 表示是否跨域
  //     pathRewrite: {
  //       '^/api': '/',// 把 /api 替换成 /
  //     },
  //   }
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: [/^vant-ui/],
    //按需引入
    transpile: [/vant.*?less/],
    babel: {
      plugins: [
        ['import', {
          libraryName: 'vant',
          "style": (name) => {
            return `${name}/style/less.js`
          }
        }, 'vant']
      ],
    },
    extend(config, ctx) {
      config.output.globalObject = 'this'
      config.module.rules.push(
        {
          test: /\.pdf$/,
          loader: 'url-loader'
        }
      )
    },
    //移动端适配
    // postcss: [
    //   require('postcss-px2rem')({
    //     remUnit: 37.5,//以设计稿375位参考
    //     remPrecision: 2,//rem 取小数点后两位
    //     propList: ['*']
    //   }),
    //   require('autoprefixer')({
    //     overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    //   })
    // ],
    postcss: {
      plugins: {
        'postcss-px2rem': {
          remUnit: 37.5,//以设计稿375位参考
          remPrecision: 2,//rem 取小数点后两位
          propList: ['*']
        },
        'autoprefixer':{
          overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
        }
      }
    },
    // 无需全局适配可使用 postcss-px2rem-include 或postcss-px2rem-exclude
    // postcss: {
    //   plugins: {
    //     'postcss-px2rem-exclude': {
    //       remUnit: 75, // 设计图为750 * height
    //       remPrecision: 2, // rem的小数点后位数
    //       exclude: /node_modules|folder_name/i //取消vant组件css转成rem//只适配非选中文件（正则匹配 排除文件）
    //     }
    //   }
    // },

    /**
      * 图片 进行 url 的打包
      */
    loader: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            outputPath: 'images',//决定打包出来的文件的路径 在 dist 下的路径
            publicPath: '/images',//决定引用的文件的路径 publicPath+name = css中引用的url的路径
            name: '[name].[ext]', //文件的名字
          }
        }


      },
      {
        test: /\.(ogg|mp3|mp4|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.less$/,
        loaders: "style-loader!css-loader!less-loader"
      }
    ],



    /*
    ** Run ESLint on save
    */
    // extend(config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/
    //     },
    //     );
    //   }
    // },
  },
  server: {
    port: 3001,
    host: '127.0.0.1'
  },
  router: {
    linkActiveClass: 'nuxt-link-active',
    // linkExactActiveClass: 'nuxt-link-exact-active',
    // mode: 'hash',
    // base: '/static/', // 使用 './' 主要是为了适配以相对路径打开的静态站点
    // middleware:'midd',//全局生效
    // scrollBehavior(to, from, savedPosition) {
    //   return { x: 0, y: 0 }
    // }

  }
}
