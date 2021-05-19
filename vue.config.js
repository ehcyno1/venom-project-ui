/*
esLint는 javascript 오류를 최대한 줄이기 위해 사용자에게 오류가 날만한 사항을 미리 알려줍니다.
하지만 과도하게 오류를 최소화하기 위해 실행은 되지만 오류라고 알려주는 경우도 있죠
개발할 때 이런게 많이 불편할 경우 esLint 설정 끄는법은 아래와 같습니다.
package.json과 같은 경로에 vue.config.js 파일을 만들어줍니다.
*/
module.exports = {
    lintOnSave: false,

    devServer: {
        port:8081
    },

    transpileDependencies: [
      'vuetify'
    ]
}
