
import { Plugin } from 'obsidian'


export default class CAFGPluginTemplate extends Plugin {
	

	async onload() {
		console.log("Plugin was loaded!")
	}

	async onunload() {
		console.log("Plugins was unloaded!")
	}

	
}

