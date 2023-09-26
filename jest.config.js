module.exports = {
	moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.ts?$': 'ts-jest',
		'^.+\\.vue$': '@vue/vue2-jest',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/testing/file-transformer.js'
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	testEnvironment: 'jest-environment-jsdom-global'
	// testEnvironment: "jsdom"
}
