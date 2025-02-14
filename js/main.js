/** Responsive Navbar **/

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

/** Smooth Scrolling**/
$(document).on("click", 'a[href^="#"]', function (event) {
	event.preventDefault();
	$("html, body").animate(
		{
			scrollTop: $($.attr(this, "href")).offset().top,
		},
		500
	);
});

/** Main Diagnostic Quiz Function **/

(function () {
	var questions = [

		{
			//1
			//2c
			//passageI starts
			//https://docs.google.com/document/d/1mUBBRMZtDwh3qFvBlbbAn1tLrZ2k3iKNwqqYF1B80YE/edit?usp=sharing
			//Entire Quiz on GDocs -- JAMB USE OF ENGLISH Chioma 25.10.24Updated-Chioma
			qType: "Section A: Comprehension & Summary (Passage I)",
			question: "Based on the passage, what is one way technology has changed traditional classrooms?",
			choices: ["A) By removing teachers from classrooms", "B) By providing students with better textbooks", "C) By introducing tools like projectors and tablets", "D) By increasing the number of school hours"],
			correctAnswer: 2,
			image: "img/JAMB1_Comprehension_SectionA_PassageI.png",
			explanation:  "The correct answer is C.  The sentence that relays this is in the first paragraph: 'Traditional classrooms are being replaced by smart classrooms where digital tools such as projectors, tablets, and interactive boards are common.'"
		},
		{
			//
			//2
			//
			//b1
			qType: "Section A: Comprehension & Summary (Passage I)",
			question: "Based on the passage, what is the 'digital divide'?",
			choices: ["A) The gap between students who prefer digital learning and those who do not",
				"B) The difference in technological access between rural/low-income students and their peers",
				"C) The divide between online and offline learning methods",
				"D) The gap between students' attention spans when using technology"],
			correctAnswer: 1,
			image: "img/JAMB1_Comprehension_SectionA_PassageI.png",
			explanation:  "The correct answer is B.  The sentence that relays this is: 'One major issue is the digital divide where students in rural or low-income areas may not have access to modern learning tools.'"

		},
		{
			//
			//3
			//c2
			//
			qType: "Section A: Comprehension & Summary (Passage I)",
			question: "Based on the passage, what concern is raised about the excessive use of technology in education?",
			choices: ["A) It leads to higher costs for schools.",
					"B) It limits the amount of information available to students.",
					"C) It may negatively affect students’ attention spans and social skills.",
					"D) It reduces teachers' ability to track student progress."],
			correctAnswer: 2,
			image: "img/JAMB1_Comprehension_SectionA_PassageI.png",
			explanation: "The correct answer is C.  The sentence that relays this is: 'Additionally, excessive use of technology has raised concerns about its impact on students’ attention spans and social skills.'"
		},
		{
			//
			//4
			//
			//c2
			qType: "Section A: Comprehension & Summary (Passage I)",
			question: "What do many educators believe about the use of technology in education?",
			choices: ["A) It is only beneficial for wealthy students.",
			"B) It should be avoided to preserve traditional teaching methods.",
			"C) It can enhance learning when used appropriately.",
			"D) It is the sole solution to educational inequality."],
			correctAnswer: 2,
			image: "img/JAMB1_Comprehension_SectionA_PassageI.png",
			explanation: "The correct answer is C.  The sentence that relays this is: 'Despite these challenges, many educators believe that technology – when used appropriately – can greatly enhance learning outcomes.'"
		},
		{
			//
			//5
			//
			//1b
			qType: "Section A: Comprehension & Summary (Passage I)",
			question: "What is one advantage of technology in education mentioned in the passage?",
			choices: ["A) It replaces the need for teachers.",
					"B) It allows personalized learning experiences.",
					"C) It eliminates all educational challenges.",
					"D) It makes students more social."],
			correctAnswer: 1,
			image: "img/JAMB1_Comprehension_SectionA_PassageI.png",
			explanation: "The correct answer is B.  The sentence that relays this is: 'It allows for personalized learning experiences where lessons are tailored to meet the individual needs of students.'"
		},
		{
			//
			//6
			//c2
			//passage2 starts
			qType: "Section A: Comprehension & Summary (Passage II)",
			//6 blank spaces
			question: "With just a few clicks, individuals can connect with others across the globe regardless of geographical ______.",
			choices: ["A) areas",
			   "B) positions",
			  "C) boundaries",
			   "D) barriers"],
			correctAnswer: 2,
			image: "img/JAMB1-useofenglish-ComprehensionA-PassageII.png",
			explanation: "The correct answer is C.  The word 'regardless' signifies that even the challenges of 'geographical boundaries' won't keep people from connecting with one another online."
		},
				{
					//
					//7
					//
					//
					qType: "Section A: Comprehension & Summary (Passage II)",
					question: "The internet has made it easier for people to acquire knowledge as vast amounts of information are available at their ______.",
					choices: ["A) disposals",
				   "B) fingertips",
				   "C) reach",
				   "D) hands"],
					correctAnswer: 1,
					image: "img/JAMB1-useofenglish-ComprehensionA-PassageII.png",
					explanation: "The correct answer is 'B) fingertips'.  There is now 'vast amounts of information…available at their fingertips', not necessarily 'at their disposals' or 'at their reach' or 'at their hands' as those answers are grammatically incorrect in the context of this sentence."
				},
				{
					//
					//8
					//b1
					//
					qType: "Section A: Comprehension & Summary (Passage II)",
					question: "Additionally, businesses now use the internet to ______ their products and services to a wider audience, increasing their visibility and revenue.",
					choices: ["A) purchase",
									   "B) promote",
									   "C) create",
									   "D) collect"],
					correctAnswer: 1,
					image: "img/JAMB1-useofenglish-ComprehensionA-PassageII.png",
					explanation: "Many business owners want to grow their respective businesses; therefore, they would want to 'promote' their businesses via the internet.  Hence, the correct answer is 'B) promote'."
				},
				{
					//
					//9
					//
					//a0
					qType: "Section A: Comprehension & Summary (Passage II)",
					question: "One of the major concerns is the spread of ______ information which can have serious consequences.",
					choices: ["A) false",
				   "B) true",
				   "C) digital",
				   "D) useful"],
					correctAnswer: 0,
					image: "img/JAMB1-useofenglish-ComprehensionA-PassageII.png",
					explanation: "Something that has 'serious consequences' would be negative for people; therefore, the correct answer is 'A) false'.  The other 3 options are either positive ('useful' or 'true') or neutral or plainly descriptive ('digital')."
				},
				{
					//
					//10
					//a0
					//
					qType: "Section A: Comprehension & Summary (Passage II)",
					question: "Another challenge is the issue of privacy. As people share more personal data online, there is a growing risk of ______ theft and other forms of cybercrime.",
					choices: ["A) identity",
									   "B) money",
									   "C) property",
									   "D) intellectual"],
					correctAnswer: 0,
					image: "img/JAMB1-useofenglish-ComprehensionA-PassageII.png",
					explanation: "A popular form of cybercrime is 'identity theft' and consumers need to be aware of this as a particular challenge in today's modern era.  Hence, the correct answer is 'A) identity'."
				},
				{
					//
					//11
					//b1
					//
					qType: "Section A: Comprehension & Summary (Passage II)",
					question: "To stay safe, it is important for users to follow best practices such as using strong passwords and avoiding ______ websites.",
					choices: ["A) informative",
									  "B) suspicious",
									  "C) secure",
									  "D) interactive"],
					correctAnswer: 1,
					image: "img/JAMB1-useofenglish-ComprehensionA-PassageII.png",
					explanation: "The correct answer for this one will be negative because consumers are told to avoid these types of websites.  Hence, the correct answer is 'B) suspicious'.  Meanwhile, the other answers are either positive ('informative', 'secure') or neutral or plainly descriptive ('interactive') so they're clearly incorrect."
				},
				{
					//
					//12
					//
					//d3
					qType: "Section A: Comprehension & Summary (Passage II)",
					question: "By adopting good practices, individuals can enjoy the ______ of the internet while minimizing the risks.",
					choices: ["A) burdens",
									  "B) disadvantages",
									  "C) limitations",
									  "D) benefits"],
					correctAnswer: 3,
					image: "img/JAMB1-useofenglish-ComprehensionA-PassageII.png",
					explanation: "The correct answer will be positive because consumers are being described as being able to 'enjoy the ______ of the internet…'.  Hence, the correct answer is: 'D) benefits'.  The other 3 answer choices are classically negative or at least aren't nouns that one is typically thought of to 'enjoy' ('burdens', 'disadvantages', and 'limitations') and are therefore incorrect."
				},
				{
					//
					//13
					//c2
					//
					qType: "Section A: Comprehension & Summary (Passage II)",
					question: "Ultimately, the internet has revolutionized the world and its impact will continue to ______ in the coming years.",
					choices: ["A) decline",
								    "B) fail",
										"C) grow",
								    "D) disappear"],
					correctAnswer: 2,
					image: "img/JAMB1-useofenglish-ComprehensionA-PassageII.png",
					explanation: "The word 'and' makes it clear that the correct answer would be expansive and positive.  Hence, the correct answer is 'C) grow'.  The other 3 options are contractive and negative ('decline', 'fail', and 'disappear') and are incorrect."

				},
				{
					//
					//14
					//
					//b1
					qType: "Section A: Comprehension & Summary (Passage II)",
					question: "To stay safe online, users should use ______ passwords.",
					choices: ["A) weak",
									  "B) strong",
									  "C) temporary",
									  "D) old"],
					correctAnswer: 1,
					image: "img/JAMB1-useofenglish-ComprehensionA-PassageII.png",
					explanation: "For a consumer – or a 'user' – to remain 'safe online', he/she should probably use 'B) strong' passwords.  The word 'strong' is positive and the other 3 incorrect answer choices feature negative or slightly neutral words ('weak', 'temporary', and 'old')."
				},
				{
					//
					//15
					//
					//b1
					qType: "Section A: Comprehension & Summary (Passage II)",
					question: "The internet has ______ the world.",
					choices: ["A) maintained",
									  "B) revolutionized",
									  "C) slowed down",
									  "D) replaced"],
					correctAnswer: 1,
					image: "img/JAMB1-useofenglish-ComprehensionA-PassageII.png",
					explanation: "This is the concluding sentence of this passage.  The word that supports the overwhelming influence that the internet has had throughout the world is 'B) revolutionized'.  This is clearly the correct answer."
				},
{
	//
	//16
	//c2
	//passage3
	qType: "Section A: Comprehension & Summary (Passage III)",
	question: "According to the passage, what is the main cause of climate change?",
	choices: ["A) Changes in the Earth’s orbit",
	          "B) Volcanic eruptions",
	          "C) Human activities such as burning fossil fuels and deforestation",
	          "D) Natural climate cycles"],
	correctAnswer: 2,
	image: "img/JAMB1-useofenglish-Comprehension A-PassageIII.png",
	explanation: "The first sentence of this passage features the correct answer C: 'Climate change refers to long-term shifts in temperatures and weather patterns mainly due to human activities such as the burning of fossil fuels, deforestation, and industrial processes'."
},
{
	//
	//17
	//b1
	//
	qType: "Section A: Comprehension & Summary (Passage III)",
	question: "How does climate change affect agriculture in developing countries?",
	choices: ["A) By increasing agricultural productivity",
	          "B) By causing heat stress in crops and livestock, reducing yields",
	          "C) By making farming easier and more predictable",
	          "D) By ensuring constant water supply for irrigation"],
	correctAnswer: 1,
	image: "img/JAMB1-useofenglish-Comprehension A-PassageIII.png",
	explanation: "The sentence that makes it clear that the correct answer is B is: 'These changes are impacting crop yields and livestock production, posing significant challenges to food security around the world.'  The phrase 'These changes' refers to the effects of climate change."
},
{
	//
	//18
	//
	//c2
	qType: "Section A: Comprehension & Summary (Passage III)",
	question: "What is one major challenge to agriculture caused by unpredictable rainfall patterns?",
	choices: ["A) Increased soil fertility",
	          "B) Better crop yields",
	          "C) Water shortages and flooding",
	          "D) Improved livestock production"],
	correctAnswer: 2,
	image: "img/JAMB1-useofenglish-Comprehension A-PassageIII.png",
	explanation: "The sentence that makes it clear that C is the correct answer is: 'As global temperatures rise, farmers are experiencing unpredictable weather patterns, including extreme droughts, floods, and erratic rainfall'."
},
{
	//
	//19
	//c2
	//
	qType: "Section A: Comprehension & Summary (Passage III)",
	question: "How does climate change affect the distribution of pests and diseases?",
	choices: ["A) Pests and diseases become extinct.",
	          "B) They are confined to their original regions.",
	          "C) Warmer temperatures allow them to thrive in new regions.",
	          "D) Climate change has no effect on pests and diseases."],
	correctAnswer: 2,
	image: "img/JAMB1-useofenglish-Comprehension A-PassageIII.png",
	explanation: "The passage's third paragraph features the sentence that makes C the correct answer: 'Furthermore, climate change is altering the distribution of pests and diseases as warmer temperatures allow them to survive in regions that were previously unsuitable for them'."
},
{
	//
	//20
	//
	//c2
	qType: "Section A: Comprehension & Summary (Passage III)",
	question: "What is the significance of sustainable farming practices in combating climate change?",
	choices: ["A) They prevent any further agricultural production.",
	          "B) They worsen the effects of climate change.",
	          "C) They help improve soil health, water conservation, and biodiversity.",
	          "D) They make farming practices more expensive."],
	correctAnswer: 2,
	image: "img/JAMB1-useofenglish-Comprehension A-PassageIII.png",
	explanation: "The two sentences that feature evidence making C the correct answer are: 'Additionally, sustainable farming practices such as agroforestry and conservation agriculture can help mitigate the effects of climate change.  These practices not only improve soil health and water conservation, but also increase biodiversity on farms'."
},
{
	//
	//21
	//a0
	//
	qType: "Section A: Comprehension & Summary (Passage III)",
	question: "What is one potential solution to climate change’s impact on agriculture mentioned in the passage?",
	choices: ["A) Developing climate-resilient crops",
	          "B) Increasing deforestation for agricultural land",
	          "C) Reducing the amount of rainfall",
	          "D) Decreasing agricultural research"],
	correctAnswer: 0,
	image: "img/JAMB1-useofenglish-Comprehension A-PassageIII.png",
	explanation: "The sentence that makes A clearly correct is: 'Scientists are working on developing climate-resilient crops that can withstand extreme weather conditions'."
},
{
	//
	//22
	//b1
	//
	qType: "Section A: Comprehension & Summary (Passage III)",
	question: "Why is water availability a critical concern for farmers?",
	choices: ["A) Because it is always constant in every region",
	          "B) Because climate change is causing unpredictable rainfall patterns",
	          "C) Because crops no longer need water",
	          "D) Because irrigation systems are no longer functional"],
	correctAnswer: 1,
	image: "img/JAMB1-useofenglish-Comprehension A-PassageIII.png",
	explanation: "The beginning of the third paragraph in the passage makes it clear that B is correct here: 'Water availability is another major concern.  In regions that rely on rain-fed agriculture, unpredictable rainfall patterns can lead to water shortages, affecting irrigation and crop growth'."
},
{
	//
	//23
	//
	//c2
	qType: "Section A: Comprehension & Summary (Passage III)",
	question: "How does heat stress affect livestock according to the passage?",
	choices: ["A) It increases their productivity.",
	          "B) It improves their health.",
	          "C) It affects their health, reproduction, and overall productivity.",
	          "D) It has no impact on livestock."],
	correctAnswer: 2,
	image: "img/JAMB1-useofenglish-Comprehension A-PassageIII.png",
	explanation: "The sentence in the passage that clearly makes C correct is: 'Similarly, livestock is vulnerable to heat stress, which can affect their health, reproduction, and overall productivity'."
},
{
	//
	//24
	//
	//c2
	qType: "Section A: Comprehension & Summary (Passage III)",
	question: "What is the role of agroforestry in addressing climate change?",
	choices: ["A) It decreases biodiversity on farms.",
	          "B) It contributes to deforestation.",
	          "C) It is a sustainable practice that improves soil health and water conservation.",
	          "D) It reduces the number of crops grown."],
	correctAnswer: 2,
	image: "img/JAMB1-useofenglish-Comprehension A-PassageIII.png",
	explanation: "The sentence that makes it clear that C is the correct answer is: 'These practices not only improve soil health and water conservation, but also increase biodiversity on farms'.  The phrase 'These practices' refers to 'agroforestry and conservation agriculture' which is mentioned in the previous sentence.  Hence, this is why C is correct."
},
{
	//
	//25
	//c2
	//
	qType: "Section A: Comprehension & Summary (Passage III)",
	question: "What does the passage suggest is urgently needed to protect global food security?",
	choices: ["A) Abandoning agriculture altogether",
	          "B) Developing more chemical fertilizers",
	          "C) Addressing the root causes of climate change",
	          "D) Reducing scientific research in agriculture."],
	correctAnswer: 2,
	image: "img/JAMB1-useofenglish-Comprehension A-PassageIII.png",
	explanation: "The final sentence makes C clearly correct here: 'While there are solutions being developed to adapt to and mitigate its effects, urgent action is needed to address the root causes of climate change and protect food security for future generations'."
},
{
	//
	//26
	//
	//c2
	qType: "Section B: Lexis & Structure | Sentence Interpretation Questions",
	question: "What does this sentence suggest about the football match?",
	choices: ["A) The match was postponed due to the rain.",
	          "B) The players refused to play in the rain.",
	          "C) The match was not affected by the heavy rain.",
	          "D) The match was canceled before it began."],
	correctAnswer: 2,
	image: "img/JAMB1-Comprehension A-Number26.png",
	explanation: "Even though the rain was coming down hard, the football match wasn't interrupted at all.  Hence, the correct answer is: 'C) The match was not affected by the heavy rain'."
},
{
	//
	//27
	//b1
	//
	qType: "Section B: Lexis & Structure | Sentence Interpretation Questions:",
	question: "What does the sentence imply about the woman's speech?",
	choices: ["A) She spoke loudly but was ignored.",
	          "B) She spoke softly and went unheard.",
	          "C) She refused to speak at all.",
	          "D) She spoke clearly and everyone listened."],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-Number27.png",
	explanation: "The correct answer is B because it essentially restates the sentence.  The word 'quietly' is replaced with 'softly' and 'no one could hear her' is replaced with 'went unheard'."
},
{
	//
	//28
	//
	//a0
	qType: "Section B: Lexis & Structure | Sentence Interpretation Questions:",
	question: "What does this sentence imply?",
	choices: ["A) John failed the exam because he didn’t study enough.",
	          "B) John passed the exam with ease.",
	          "C) John did not take the exam.",
	          "D) John studied hard and passed the exam."],
	correctAnswer: 0,
	image: "img/JAMB1-Comprehension A-Number28.png",
	explanation: "The sentence states that '[John] would have passed the exam IF he had studied harder'.  Therefore, it stands to reason that John did not pass the exam and the main reason is that he didn't study enough.  The answer that matches this is 'A) John failed the exam because he didn’t study enough'."
},
{
	//
	//29
	//
	//d3
	qType: "Section B: Lexis & Structure | Sentence Interpretation Questions:",
	question: "What is the meaning of this sentence?",
	choices: ["A) The meeting is confirmed for tomorrow without any doubt.",
	          "B) The chairman has already canceled the meeting.",
	          "C) The meeting will not be held tomorrow under any circumstances.",
	          "D) The meeting will only be canceled if the chairman decides so."],
	correctAnswer: 3,
	image: "img/JAMB1-Comprehension A-Number29.png",
	explanation: "The word 'unless' makes it clear that the person who decides whether or not the committee meeting will take place is 'the chairman'.  Hence, the correct answer is 'D: The meeting will only be canceled if the chairman decides so'."
},
{
	//
	//30
	//c2
	//
	qType: "Section B: Lexis & Structure | Sentence Interpretation Questions:",
	question: "What does this sentence imply about the workers?",
	choices: ["A) They stopped working because they were tired.",
	          "B) They were exhausted and took a break.",
	          "C) They kept working despite feeling tired.",
            "D) They finished the project before getting tired."],
	correctAnswer: 2,
	image: "img/JAMB1-Comprehension A-Number30.png",
	explanation: "The option that clearly restates what the sentence describes is: 'C. They kept working despite feeling tired'.  The main reason is that though the workers were tired, they continued on with the project."
},
{
	//
	//31
	//
	//opposite question type
	qType: "Section B: Lexis & Structure | Antonyms",
	question: "The CEO's <i>munificent</i> donation to the charity surprised everyone.",
	choices: ["A) stingy",
						"B) generous",
	          "C) lavish",
	          "D) benevolent"],
	correctAnswer: 0,
	image: "img/JAMB1-Comprehension A-opposite.png",
	explanation: "The antonym of 'munificent' is 'stingy'.  The other 3 answer choices are positive with the word 'benevolent' sharing the same root ('ben') as 'benefit' and 'benefactor'.  Hence, the correct answer is: 'A) stingy'."
},
{
	//
	//32
	//d3
	//
	qType: "Section B: Lexis & Structure | Antonyms",
	question: "Sarah remained <i>optimistic</i> even after hearing the unfortunate news.",
	choices: ["A) hopeful",
	          "B) confident",
	          "C) positive",
	          "D) pessimistic"],
	correctAnswer: 3,
	image: "img/JAMB1-Comprehension A-opposite.png",
	explanation: "The antonym of 'optimistic' is 'pessimistic'.  The other 3 answer choices are positive words while 'D) pessimistic' is the only negative word and is the correct answer."
},
{
	//
	//33
	//
	//a0
	qType: "Section B: Lexis & Structure | Antonyms",
	question: "The student gave a <i>laconic</i> response during the interview, which left the panelists puzzled.",
	choices: ["A) verbose",
	          "B) brief",
	          "C) concise",
	          "D) reserved"],
	correctAnswer: 0,
	image: "img/JAMB1-Comprehension A-opposite.png",
	explanation: "During an interview, a job candidate is expected to give thorough responses, not brief responses.  Therefore, the word opposite in meaning to 'laconic' is 'verbose'.  The word 'laconic' is probably a synonym of 'short' or 'brief'.  The word 'verbose' means 'talkative' or 'communicative'.  Hence, the correct answer is: 'A) verbose'."
},
{
	//
	//34
	//
	//b1
	qType: "Section B: Lexis & Structure | Antonyms",
	question: "The judge's <i>lenient</i> ruling was unexpected given the seriousness of the crime.",
	choices: ["A) forgiving",
						"B) strict",
	          "C) tolerant",
	          "D) compassionate"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-opposite.png",
	explanation: "The word 'strict' is an antonym of 'lenient'.  The synonyms of 'lenient' are the other option choices ('forgiving', 'tolerant', 'compassionate').  Hence, the correct answer is: 'B) strict'."
},
{
	//
	//35
	//
	//b1
	qType: "Section B: Lexis & Structure | Antonyms",
	question: "His <i>obsequious</i> behavior towards his superiors annoyed his colleagues.",
	choices: ["A) submissive",
	          "B) assertive",
	          "C) sycophantic",
	          "D) servile"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-opposite.png",
	explanation: "While the word 'assertive' might not seem exactly like an antonym of 'obsequious', using Process-of-Elimination can help us get to that answer selection.  The other 3 options are synonyms of 'obsequious' ('submissive', 'sycophantic', 'servile').  Hence, the only other answer left is the correct answer: 'B) assertive'."
},
{
	//
	//36
	//
	//b1
	qType: "Section B: Lexis & Structure | Synonyms",
	question: "The scientist’s <i>erudite</i> lecture on quantum mechanics left the audience in awe of his knowledge.",
	choices: ["A) ignorant",
	          "B) scholarly",
						"C) uninformed",
						"D) simple"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-synonym.png",
	explanation: "The word that is the most synonymous with 'erudite' in the answer choices is the correct answer: 'B) scholarly'.  The other 3 options are neutral to negative ('ignorant', 'uninformed', and 'simple'.)"
},
{
	//
	//37
	//b1
	//
	qType: "Section B: Lexis & Structure | Synonyms",
	question: "Her <i>pervasive</i> influence in the organization was felt by every department.",
	choices: ["A) limited",
	          "B) widespread",
						"C) rare",
						"D) negligible"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-synonym.png",
	explanation: "The closest synonym to 'pervasive' in the answer choices is 'widespread'.  If something pervades an environment, then that means that it spreads out widely and has a strong effect on it.  The other 3 answer choices are closer to antonyms of the word 'pervasive' and are therefore incorrect."
},
{
	//
	//38
	//
	//b1
	qType: "Section B: Lexis & Structure | Synonyms",
	question: "His <i>obstinate</i> refusal to admit his mistake caused further tension in the group.",
	choices: ["A) flexible",
	          "B) stubborn",
	          "C) agreeable",
	          "D) persuadable"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-synonym.png",
	explanation: "The word 'obstinate' means 'stubborn'.  And since we are looking for the synonym in the answer choices, 'B) stubborn' is the correct answer.  The other answer choices are positive and synonyms of one another ('flexible', 'agreeable', and 'persuadable') and are therefore incorrect."
},
{
	//
	//39
	//
	//b1
	qType: "Section B: Lexis & Structure | Synonyms",
	question: "The professor gave an <i>ephemeral</i> speech, quickly wrapping up the event without much delay.",
	choices: ["A) permanent",
	          "B) momentary",
	          "C) lengthy",
	          "D) enduring"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-synonym.png",
	explanation: "The evidence that the word 'ephemeral' means 'quick' or 'fleeting' is the phrase 'quickly wrapping up the event without much delay'.  Therefore, the correct answer is: 'B) momentary' since we're looking for synonyms with this problem type.  The other 3 answer choices are antonyms of 'ephemeral' ('permanent', 'lengthy', and 'enduring')."
},
{
	//
	//40
	//
	//b1
	qType: "Section B: Lexis & Structure | Synonyms",
	question: "The defendant made a <i>cogent</i> argument that swayed the jury in his favor.",
	choices: ["A) unconvincing",
	          "B) persuasive",
	          "C) weak",
	          "D) confusing"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-synonym.png",
	explanation: "The word 'cogent' means 'persuasive' with the textual evidence of the sentence being that the 'argument swayed the jury in [the defendant's] favor'.  Hence, the correct answer is: 'B) persuasive'."
},
{
	//
	//41
	//
	//c2
	qType: "Section B: Lexis & Structure | Basic Grammar",
	question: "He missed the match though it was shown on television on two ______ nights.",
	choices: ["A) considered",
	          "B) consistent",
	          "C) consecutive",
	          "D) concurrent"],
	correctAnswer: 2,
	image: "img/JAMB1-Comprehension A-basicgrammar.png",
	explanation: "The answer choice 'C) consecutive' is correct since it means 'back-to-back' or 'in a row' or 'sequential (without skipping)'.  The hint is that even though the match was shown on tv two nights in a row ('two consecutive nights'), the man missed seeing it altogether.  The word 'consecutive' makes the most sense out of all the answer choices."
},
{
	//
	//42
	//
	//a0
	qType: "Section B: Lexis & Structure | Basic Grammar",
	question: "Not only ______ late, but he also forgot to bring the documents.",
	choices: ["A) did he arrive",
	          "B) he did arrive",
	          "C) arrived he",
	          "D) he arrived"],
	correctAnswer: 0,
	image: "img/JAMB1-Comprehension A-basicgrammar.png",
	explanation: "The correct answer is 'A) did he arrive' as this is a 'not only…but also' grammar construction.  Here we invert the subject and the verb so the verb goes first ('did he arrive') instead of the subject ('he did arrive') or the other answer choices."
},
{
	//
	//43
	//
	//b1
	qType: "Section B: Lexis & Structure | Basic Grammar",
	question: "The committee reached a consensus ______ everyone’s opinions.",
	choices: ["A) with disregarding for",
            "B) regardless of",
            "C) with regard to",
            "D) irrespective for"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-basicgrammar.png",
	explanation: "The answer choice 'B) regardless of' is the only answer that makes clear grammatical sense.  Essentially the sentence is relaying that the committee voted on whatever needed to be voted on and moved forward in tackling the issue/s they were deciding upon even though ('regardless of') there were differing opinions."
},
{
	//
	//44
	//
	//d3
	qType: "Section B: Lexis & Structure | Basic Grammar",
	question: "The minister, along with his aides, ______ the project last week.",
	choices: ["A) were inaugurating",
	          "B) is inaugurating",
	          "C) were inaugurated",
	          "D) was inaugurating"],
	correctAnswer: 3,
	image: "img/JAMB1-Comprehension A-basicgrammar.png",
	explanation: "Since the subject of the sentence is 'The minister' and the phrase 'along with his aides' is an aside, the verb needs to be singular.  The verb also needs to be past tense since the phrase 'last week' concludes the sentence.  Therefore, the answer choice 'D) was inaugurating' is correct."
},
{
	//
	//45
	//
	//b1
	qType: "Section B: Lexis & Structure | Basic Grammar",
	question: "It is high time the government ______ immediate measures to combat inflation.",
	choices: ["A) takes",
	          "B) took",
	          "C) take",
	          "D) taking"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-basicgrammar.png",
	explanation: "The correct answer for this sentence is 'B) took'.  The verb needs to be simple past tense here with this sentence construction."
},
{
	//
	//46
	//
	//a0
	qType: "Section B: Lexis & Structure | Basic Grammar",
	question: "The company would have expanded globally if it ______ the necessary funds.",
	choices: ["A) had acquired",
	          "B) has acquired",
	          "C) was acquiring",
	          "D) acquires"],
	correctAnswer: 0,
	image: "img/JAMB1-Comprehension A-basicgrammar.png",
	explanation: "The crucial phrase here is 'would have'.  This makes the correct answer: 'A) had acquired'.  The correct sentence reads as follows: 'The company would have expanded globally if it had acquired the necessary funds.'"

},
{
	//
	//47
	//
	//b1
	qType: "Section B: Lexis & Structure | Basic Grammar",
	question: "______ the fierce competition, she still managed to win the scholarship.",
	choices: ["A) Although",
            "B) Despite",
            "C) Even though",
            "D) In spite"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-basicgrammar.png",
	explanation: "The correct answer is 'B) Despite' since none of the other answer choices make clear and logical grammatical sense.  The correct sentence reads: 'Despite the fierce competition, she still managed to win the scholarship'.  The answer choice 'D) In spite' is incorrect because the correct phrasing would have to be 'In spite of'.  Hence, the only clear and correct answer is B."
},
{
	//
	//48
	//
	//a0
	qType: "Section B: Lexis & Structure | Basic Grammar",
	question: "She started her career as an ______ teacher.",
	choices: ["A) auxiliary",
	          "B) auxillary",
	          "C) auxilary",
	          "D) auxilliary"],
	correctAnswer: 0,
	image: "img/JAMB1-Comprehension A-basicgrammar.png",
	explanation: "The misspellings in B, C, and D make the correct answer: 'A) auxiliary'."
},
{
	//
	//49
	//
	//b1
	qType: "Section B: Lexis & Structure | Basic Grammar",
	question: "No sooner ______ the meeting started than the fire alarm rang.",
	choices: ["A) did",
	          "B) had",
	          "C) has",
	          "D) is"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-basicgrammar.png",
	explanation: "The correct answer is 'B) had' because of the past tense verb 'rang' which concludes the sentence as well as the relative/comparative word 'than'.  The correct sentence reads: 'No sooner had the meeting started than the fire alarm rang'."
},
{
	//
	//50
	//
	//d3
	qType: "Section B: Lexis & Structure | Basic Grammar",
	question: "To improve worker productivity, the company is focusing its attention on the ______ of incentives and an overall improvement in the editorial process for deliverables.",
	choices: ["A) synergy",
	          "B) tapping",
	          "C) arrangement",
	          "D) alignment"],
	correctAnswer: 3,
	image: "img/JAMB1-Comprehension A-basicgrammar.png",
	explanation: "The phrase 'alignment of incentives' is a popular phrase in the general work lexicon.  Hence, the correct answer is 'D) alignment' with the correct sentence being: 'To improve worker productivity, the company is focusing attention on the alignment of incentives and an overall improvement in the editorial process for deliverables'."
},
{
	//
	//51
	//
	//b1
	qType: "Section C: Oral Forms | Vowels & Consonants",
	question: "51. caught",
	choices: ["A) /æ/",
	          "B) /ɔː/",
	          "C) /aʊ/",
	          "D) /ɪ/"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-vowelsconsonants.png",
	explanation: "B is the correct answer.  Identifying the correct sound is crucial in solving questions of this problem type."
},
{
	//
	//52
	//
	//b1
	qType: "Section C: Oral Forms | Vowels & Consonants",
	question: "52. measure",
	choices: ["A) /ʃ/",
		        "B) /ʒ/",
		        "C) /dʒ/",
		        "D. /s/"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-vowelsconsonants.png",
	explanation: "B is the correct answer.  Identifying the correct sound is crucial in solving questions of this problem type."
},
{
	//
	//53
	//
	//b1
	qType: "Section C: Oral Forms | Vowels & Consonants",
	question: "53. judge",
	choices: ["A) /ʃ/",
	          "B) /dʒ/",
	          "C) /ʒ/",
	          "D) /g/"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-vowelsconsonants.png",
	explanation: "B is the correct answer.  Identifying the correct sound is crucial in solving questions of this problem type."
},
{
	//
	//54
	//a0
	//
	qType: "Section C: Oral Forms | Vowels & Consonants",
	question: "54. church",
	choices: ["A) /tʃ/",
	          "B) /ɪ/",
	          "C) /ʃ/",
	          "D) /æ/"],
	correctAnswer: 0,
	image: "img/JAMB1-Comprehension A-vowelsconsonants.png",
	explanation: "A is the correct answer.  Identifying the correct sound is crucial in solving questions of this problem type."
},
{
	//
	//55
	//
	//c2
	qType: "Section C: Oral Forms | Stress Patterns",
	question: "55. committee",
	choices: ["A) COmmittee",
            "B) COMmittee",
            "C) comMITtee",
            "D) commitTEE"],
	correctAnswer: 2,
	image: "img/JAMB1-Comprehension A-stresspatterns.png",
	explanation: "The emphasis is on the second syllable.  This means that 'C) comMITtee' is correct."
},
{
	//
	//56
	//
	//c2
	qType: "Section C: Oral Forms | Stress Patterns",
	question: "56. photograph",
	choices: ["A) PHOtoGRAPH",
	          "B) phoTOgraph",
	          "C) PHOtograph",
	          "D) photoGRAPH"],
	correctAnswer: 2,
	image: "img/JAMB1-Comprehension A-stresspatterns.png",
	explanation: "The emphasis is on the first syllable.  This means that 'C) PHOtograph' is correct."
},
{
	//
	//57
	//
	//a0
	qType: "Section C: Oral Forms | Stress Patterns",
	question: "presentation",
	choices: ["A) presenTAtion",
	          "B) PRESENTation",
	          "C) preSENtation",
	          "D) presentaTION"],
	correctAnswer: 0,
	image: "img/JAMB1-Comprehension A-stresspatterns.png",
	explanation: "The emphasis is on the third syllable.  This means that 'A) presenTAtion' is correct."
},
{
	//
	//58
	//
	//b1
	qType: "Section C: Oral Forms | Stress Patterns",
	question: "Choose the option that has the stress on the first syllable.",
	choices: ["A) advice",
	          "B) absent",
		        "C) mistake",
		        "D) between "],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-stresspatterns.png",
	explanation: "The answer choice 'B) absent' is correct since that is the only answer choice with the stress on the word's first syllable ('ABsent')."
},
{
	//
	//59
	//
	//b1
	qType: "Section C: Oral Forms | Stress Patterns",
	question: "Choose the option that has the stress on the first syllable.",
	choices: ["A) arrive",
	          "B) mother",
	          "C) between",
	          "D) include"],
	correctAnswer: 1,
	image: "img/JAMB1-Comprehension A-stresspatterns.png",
	explanation: "The answer choice 'B) mother' is correct since that is the only answer choice with the stress on the word's first syllable ('MOther')."
},
{
	//
	//60
	//
	//a0
	qType: "Section C: Oral Forms | Stress Patterns",
	question: "Choose the option that has the stress on the first syllable.",
	choices: ["A) recourse",
	          "B) belong",
            "C) agree",
            "D) provide"],
	correctAnswer: 0,
	image: "img/JAMB1-Comprehension A-stresspatterns.png",
	explanation: "The answer choice 'A) recourse'' is correct since that is the only answer choice with the stress on the word's first syllable ('REcourse')."

}, ]; var questionCounter = 0; //Tracks question number
	var selections = []; //Array containing user choices
	var quiz = $("#quiz"); //Quiz div object
	var defaultQuestionContent;
	defaultQuestionContent = $("#content").text();

	// Display initial question
	displayNext();

	// Click handler for the 'next' button
	$("#next").on("click", function (e) {
		e.preventDefault();

		// Suspend click listener during fade animation
		if (quiz.is(":animated")) {
			return false;
		}
		choose();

		// If no user selection, progress stopped and pop-up alert
		if (isNaN(selections[questionCounter])) {
			swal("Please make a selection.", "Choose the best option.", "warning");
		} else {
			questionCounter++;
			displayNext();
		}
	});

	// Click handler for the 'prev' button
	$("#prev").on("click", function (e) {
		e.preventDefault();

		if (quiz.is(":animated")) {
			return false;
		}
		choose();
		questionCounter--;
		displayNext();
	});

	// Click handler for the 'Start Over' button
	$("#start").on("click", function (e) {
		e.preventDefault();

		if (quiz.is(":animated")) {
			return false;
		}
		questionCounter = 0;
		selections = [];
		displayNext();
		$("#start").hide();
	});

	// Animates buttons on hover
	$(".button").on("mouseenter", function () {
		$(this).addClass("active");
	});
	$(".button").on("mouseleave", function () {
		$(this).removeClass("active");
	});

	// Creates and returns the div that contains the questions and
	// the answer selections
	function createQuestionElement(index) {
		var qElement = $("<div>", {
			id: "question",
		});

		var header = $("<h2>Question " + (index + 1) + ":</h2>");
		qElement.append(header);

		var textProblem = $("<p>").append(questions[index].textProblem);
		qElement.append(textProblem);

		var question = $("<p>").append(questions[index].question);
		qElement.append(question);

		var radioButtons = createRadios(index);
		qElement.append(radioButtons);

		return qElement;
	}

	// Creates a list of the answer choices as radio inputs
	function createRadios(index) {
		var radioList = $("<ul>");
		var item;
		var input = "";
		for (var i = 0; i < questions[index].choices.length; i++) {
			item = $("<li>");
			input = '<label><input type="radio" name="answer" value=' + i + " />";
			input += questions[index].choices[i];
			input += "</label>";
			item.append(input);
			radioList.append(item);
		}
		return radioList;
	}

	// Reads the user selection and pushes the value to an array
	function choose() {
		selections[questionCounter] = +$('input[name="answer"]:checked').val();
	}

	// Displays next requested element
	function displayNext() {
		quiz.fadeOut(function () {
			$("#question").remove();

			if (questionCounter < questions.length) {
				var question = questions[questionCounter];

				// Show 'image' defined in question object

				if (typeof question.image !== "undefined") {
					$("#image img").attr("src", question.image);
					$("#image").show();
				} else {
					$("#image").hide();
				}

				if (typeof question.audio !== "undefined") {
					$("#audio").show();
					$("#audio audio").attr("src", "audio/" + question.audio);
					//$("#audio audio")[0].play();
				} else {
					$("#audio").hide();
					$("#audio audio").stop();
				}

				// Show 'content' defined in question object
				console.log(typeof question.content, defaultQuestionContent);
				if (typeof question.content === "undefined") {
					$("#content").text(defaultQuestionContent);
				} else {
					$("#content").text(question.content);
				}

				// Show 'qType' defined in question object
				console.log(typeof question.qType, defaultQuestionContent);
				if (typeof question.qType === "undefined") {
					$("#qType").text(defaultQuestionContent);
				} else {
					$("#qType").text(question.qType);
				}

				var nextQuestion = createQuestionElement(questionCounter);
				quiz.append(nextQuestion).fadeIn();
				if (!isNaN(selections[questionCounter])) {
					$("input[value=" + selections[questionCounter] + "]").prop(
						"checked",
						true
					);
				}

				// Controls display of 'prev' button
				if (questionCounter === 1) {
					$("#prev").show();
				} else if (questionCounter === 0) {
					$("#prev").hide();
					$("#next").show();
				}
			} else {
				var scoreElem = displayScore();
				quiz.append(scoreElem).fadeIn();
				$("#next").hide();
				$("#prev").hide();
				$("#start").show();
			}
		});
	}

	// Computes score and returns a paragraph element to be displayed
	function displayScore() {
		var score = $("<p>", {
			id: "question",
		});

		var numCorrect = 0;
		for (var i = 0; i < selections.length; i++) {
			if (selections[i] === questions[i].correctAnswer) {
				numCorrect++;
			}
		}

		score.append(
			"You got " +
				numCorrect +
				" questions out of " +
				questions.length +
				" right."
		);
		return score;
	}
})();
