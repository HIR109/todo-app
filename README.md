# TASK-APP（タスク管理アプリ）

ReactとTailwind CSSを使って作成したシンプルで使いやすいタスク管理アプリです。  
ローカルストレージ対応により、ページをリロードしてもタスクが保持されます。
※このアプリは学習用教材をベースに個人で模写・機能追加したものです。著作権は元の教材の制作者に帰属します。
---

## ✨ 主な機能

- ✅ タスクの追加（Enterキー対応）
- ✅ タスクの完了／未完了の切り替え
- ✅ タスクの削除
- ✅ タスクの並び替え（↑ ↓）
- ✅ ローカルストレージ保存による永続化
- ✅ UIにアイコン画像を使用し、視覚的にわかりやすいデザイン

---

## 🛠 使用技術

- React 19
- Vite
- Tailwind CSS
- JavaScript（ES6+）
- uuid（タスクIDの一意化）
- ローカルストレージ（ブラウザ保存）

---

## 🖥 デモ

https://hir109.github.io/todo-app

---

## 🚀 セットアップ手順

```bash
# リポジトリをクローン
git clone https://github.com/yhir109/task-app.git
cd task-app

# 依存パッケージをインストール
npm install

# 開発サーバー起動
npm run dev
```


ディレクトリ構成
src/
├── assets/              # アイコン画像（完了／未完了／削除ボタン）
│   ├── delete.png
│   ├── not_tick.png
│   ├── tick.png
│   └── todo_icon.png
├── components/          # コンポーネント群
│   ├── Todo.jsx         # タスク入力とロジック
│   └── TodoItems.jsx    # タスク単体の表示・操作
├── App.jsx              # アプリ全体
├── main.jsx             # エントリーポイント
├── index.css            # Tailwindスタイル読み込み

