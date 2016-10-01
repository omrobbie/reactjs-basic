REACT BOOTSTRAP
===============
Menggunakan **reactjs** di dalam **bootstrap**.

---

### Instalasi semua dependency dari file konfigurasi npm (package.json) :
```
$ npm install
```
atau inisialisasi file package.json yang baru dengan perintah :
```
$ npm init
```

### Instalasi webpack :
```
$ npm i webpack -D
```

### Buat file konfigurasi webpack :
```
$ touch webpack.config.js
```

### Isi kode dibawah ke dalam webpack.config.js :
```
var webpack = require('webpack');
var path = require('path');

var BUILT_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILT_DIR,
		filename: 'bundle.js'
	}
};

module.exports = config;
```

### Buat file index.jsx di src/app:
```
$ touch index.jsx
```

### Buat file html yang terkoneksi dengan file output dari webpack :
```
<script src="public/bundle.js"></script>
```

### Coba jalankan webpack :
```
$ ./node_modules/.bin/webpack -d
```

### Instalasi babel :
```
$ npm i babel-core babel-loader babel-preset-es2015 babel-preset-react -D
```

### Buat file konfigurasi babel :
```
$ touch .babelrc
```

### Isi kode dibawah ke dalam .babelrc :
```
{
	"presets" : ["es2015", "react"]
}
```

### Tambahkan kode dibawah ke dalam webpack.config.js :
```
### config....

	module: {
		loaders: [{
			test: /\.jsx?/,
			include: APP_DIR,
			loader: 'babel'
		}]
	}
```

### Instalasi react :
```
$ npm i react react-dom -S
```

### Ubah file index.jsx :
```
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
	render() {
		return <div>
			<h1>Hello Reacts!</h1>
			<p>This is my first app in react</p>
		</div>;
	}
}

render(<App />, document.getElementById('app'));
```

### Coba jalankan webpack lagi :
```
$ ./node_modules/.bin/webpack -d
```

### Untuk menjalankan webpack setiap ada perubahan, gunakan perintah berikut :
```
$ ./node_modules/.bin/webpack -d --watch
```

### Atau set shortcut didalam file package.json :
```
  "scripts": {
    "dev": "webpack -d --watch",
    "build": "webpack -p"
  },
```

### Sekarang kita bisa gunakan shortcut ini :
```
$ npm run dev
$ npm run build
```

### Catatan :
Kita bisa gunakan [react-hot-loader](http://gaearon.github.io/react-hot-loader/getstarted/ "react-hot-loader") agar web browser dapat secara otomatis menampilkan setiap perubahan yang kita lakukan.

### Buat file baru di src/app :
```
$ touch LikeComponent.jsx
```

### Isi kode dibawah ke dalam LikeComponent.jsx :
```
import React from 'react';

class LikeComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {likesCount: 0};
		this.onLike = this.onLike.bind(this);
	}

	onLike() {
		let newLikeCount = this.state.likesCount + 1;
		this.setState({likesCount: newLikeCount});
	}

	render() {
		return <div>
			Likes : <span>{this.state.likesCount}</span>
			<div><button onClick={this.onLike}>Like Me!</button></div>
		</div>
	}
}


export default LikeComponent;
```

### Tambahkan kode berikut ke dalam file index.jsx :
```
import LikeComponent from './LikeComponent.jsx';
```
kemudian di bagian render, tambahkan tag `<LikeComponent />`.

# Done!