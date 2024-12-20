const buttons = document.querySelectorAll('.tab-button')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const targetId = e.currentTarget.getAttribute('data-target')
        const allContents = document.querySelectorAll('.tab-content')
        const targetContent = document.getElementById(targetId)

        // 問題1. 表示するタブを変える前に、一度全てから`*active*`クラスを取り除く処理をJavaScriptで書いてください
        buttons.forEach((btn) => {
            btn.classList.remove('active')
        })
        // 問題1. 表示するタブを変える前に、一度全てから`*active*`クラスを取り除く処理をJavaScriptで書いてください
        allContents.forEach((content) => {
            content.classList.remove('active')
        })

        // 問題2. クリックしたボタンに対応するコンテンツとボタンに`*active*`クラスを付与してください
        e.currentTarget.classList.add('active')

        // 問題2. クリックしたボタンに対応するコンテンツとボタンに`*active*`クラスを付与してください
        targetContent.classList.add('active');
    })
})
