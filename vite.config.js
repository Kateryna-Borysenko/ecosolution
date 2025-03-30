import { qrcode } from 'vite-plugin-qrcode'

export default {
	plugins: [qrcode()],
	server: {
		host: true,
	},
}
