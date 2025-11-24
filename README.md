# テスト用シンプルサイト

このリポジトリは、HTML/CSS/JS の簡単なテスト用ホームページです。

ファイル:
- `index.html` — メインページ
- `styles.css` — スタイル
- `script.js` — 最低限のスクリプト

ローカルで表示する方法（PowerShell）:

最も簡単にブラウザで開く:
```powershell
Start-Process index.html
```

簡易HTTPサーバーを使う（推奨、同一ディレクトリで）:
```powershell
python -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

変更やカスタマイズは自由です。何か追加して欲しい機能があれば教えてください。