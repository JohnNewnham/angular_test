import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import promptList from '../assets/LM1promptsV2.json';
import { CommonModule } from '@angular/common';
import { Button1Component } from "../button1/button1.component";

interface Prompt {
	prompt: string;
	answer: string;
	chapter: number;
	isAbbreviation: boolean;
	answeredCorrectly?: boolean;
}

enum CardState {
	Prompt = 1,
	Answer = -1,
}

@Component({
	selector: 'app-prompt-cards',
	imports: [FormsModule, CommonModule, Button1Component],
	templateUrl: './prompt-cards.component.html',
	styleUrl: './prompt-cards.component.css'
})
export class PromptCardsComponent implements OnInit {
	prompts: Prompt[] = promptList;
	currentPrompts: Prompt[] = promptList;
	currentPrompt = this.currentPrompts[0];

	abbreviationsEnabled = false;
	currentState = CardState.Prompt;
	numOfChaps = 9;
	chaptersEnabled: boolean[] = Array(this.numOfChaps).fill(true);

	CS = CardState;

	ngOnInit(): void {
		this.updateCards();
		this.next(false);
	}

	next(correct: boolean): void {
		this.currentState = CardState.Prompt;

		if (correct) {
			this.currentPrompt.answeredCorrectly = true;
		}

		while (true) {
			let newPrompt = this.currentPrompts[Math.floor(Math.random() * this.currentPrompts.length)];
			if (newPrompt !== this.currentPrompt) {
				this.currentPrompt = newPrompt;
				break;
			}
		}
	}

	toggleChapter(chapter: number): void {
		this.chaptersEnabled[chapter] = !this.chaptersEnabled[chapter];
		this.updateCards();
	}

	updateCards(): void {
		const numChaptersEnabled = this.chaptersEnabled
			.map((entry, index) => entry ? (index + 1) : -1)
			.filter((chapNum) => chapNum !== -1);
		this.currentPrompts = this.prompts
			.filter((prompt) => numChaptersEnabled.includes(prompt.chapter))
			.filter((prompt) => this.abbreviationsEnabled || !prompt.isAbbreviation);
	}

	cardClicked(): void {
		this.currentState *= -1;
	}

	test(): void {
		console.log("TEST", this.currentPrompts);
	}
} // CHAPTER 8 ALSO HAS PROBLEMS WITH THE FORMATTING.
