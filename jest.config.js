module.exports = {
	moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.ts?$': 'ts-jest',
		'^.+\\.vue$': '@vue/vue2-jest'
	},
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom-global"
  // testEnvironment: "jsdom"
}