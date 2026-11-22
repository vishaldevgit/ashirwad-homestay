# HMS Call Script (English)

Simple words, short sentences. Say only what is true. If you are not sure, use the "let me confirm" line.

---

## 0. SHORT VERSION (use this first, if they are busy or the talk is short)

> "Hello sir, this is [NAME] from TechFeatures Private Limited. [COUSIN'S NAME] gave me your number. He told me you want to build your own hospital software, an in-house system. We have built a Hospital Management System with OPD and IPD ready, plus some AI features. If you are interested, I can do a live demo for you. When would be a good time?"

If they say yes: fix the day and time, confirm who will join, and end the call. The meeting is the goal. If they ask more, move to the full script below, you have the answers.

---

## 1. How you got this number (for your own context)

- Your uncle's son (your cousin brother) works at Airbnb in operations.
- He learned you are building a hospital software product.
- His friend wants an in-house hospital system. This person is not a relative and does not know your family.
- Your cousin gave you this number last week.

## 2. Opening

> "Hello sir, this is [NAME]. [COUSIN'S NAME] gave me your number. He told me you are looking to build your own hospital software. I am the founder of TechFeatures Private Limited, a software company. Do you have 10 minutes to talk?"

## 3. Your intro (30 seconds)

> "I am the founder of TechFeatures Private Limited. We are a software company and we have been running for four years. Before this I worked for 7 to 8 years in an MNC with international clients, and I led projects there. We have built a Hospital Management System, called HMS, as our own product. Two phases are ready and the third one is pending. I would like to understand your needs first, then show you what we have."

## 4. Your background (use when they ask about you)

> "I started my career in an MNC and worked there for 7 to 8 years. I worked on many domains: e-stock, Advisor Cloud, and a US healthcare product called Health Harmony, where Apple devices were used. I worked with international clients and led teams.
>
> For the last four years I have been running TechFeatures. Here I have led projects in insurance, e-commerce, and HR products like a leave management system and HRMS."

> **Check before the call:** I wrote the names (e-stock, Advisor Cloud, Health Harmony, the insurance project) from your voice message. Please check the spelling and tell me the real insurance project name if you want to use it.

## 5. Your team on this product

> "On this product we have 11 people: 7 developers, 1 technical lead, 1 project manager and 2 business analysts."

## 6. "What is your role in this?" (honest answer)

> "I will be honest. I do not know the whole hospital domain. Our marketing and sales team started this product together with a hospital administration team, so the domain knowledge came from them. After that I took it forward. I bring my technology experience to it, and I am building and improving it with my team. Two phases are ready now and the third phase is pending."

Why this works: you are clear about what you know and what you do not know. Hospital people respect that more than someone who pretends.

## 7. "Why did you build it?"

> "Many hospitals use software on a monthly subscription, and they cannot change it. If their process is different, they have to adjust to the software. We wanted the opposite. In our system the hospital admin decides who can do what, and the hospital keeps its own data."

## 8. Discovery questions (you listen most of the time)

1. Which software do you use now? What does it cost per month?
2. What is the biggest problem with it?
3. How many beds, doctors, nurses and staff do you have? How many OPD patients a day?
4. Which parts matter most: OPD, IPD, pharmacy, lab, billing, insurance?
5. One hospital or many branches? Do you want to sell it to others too?
6. By in-house, do you mean only your own use, or under your own brand?
7. Do you need to move data from your current software?
8. When do you want to start, and who decides?

## 9. Pitch (after you have heard them)

> "We have two phases ready. OPD has patient registration, doctor schedule, appointments and OPD billing. IPD has admission and beds, nursing tasks and vitals, doctor orders, medicines and discharge. There are roles for Doctor, Nurse, Receptionist, Pharmacist, Ward In-charge and Admin, and the admin controls what each role can do. Pharmacy and inventory, IPD billing and insurance are in the next phase, and we can shape that phase around your needs."

## 9b. AI features (mention in the pitch, show in the demo)

> "We also have some AI features. Two I can show you in the demo:
>
> 1. **Medical Digitizer / patient summary.** It takes patient records and turns them into a clear summary, so the doctor does not have to read everything.
> 2. **Voice entry for medicines.** While the doctor is seeing a patient, they can just speak the medicine names instead of typing. We added a layer on top that corrects the medicine names automatically. If a name still comes out wrong, the doctor can edit it on the screen. This saves the doctor a lot of time.
>
> We have a few more AI features and I can show those in the demo too."

Before the demo:
- Test the voice feature yourself, with Hindi-English mixed speech and a few common medicine names. Keep the medicines that work well for the demo.
- Check what the Digitizer does in the current build (I only know it as "Medical Digitizer" with a patient summary picker) and keep your description to what it really does.
- Decide which other AI features you will show. I saw an "HMS Assist" tab in the QA sheets, but I do not know what it does, so confirm before you mention it.
- Do not say the AI is always correct. Say: "the doctor can always edit".

## 10. Lines for hard questions

**When you do not want to answer or do not know:**
> "That is a good question. Let me set up a call with my business and product team manager. They can explain this in more detail."

**Price, features, documents:**
> "First let us have one call where I understand all your requirements and what you want to build. After that I can set a price. I will also share the feature list and documents then."

**When they ask for something you need to check (lab results, security, how many hospitals it supports, timeline):**
> "Let me confirm this and get back to you."

**Insurance / TPA:**
> "It is not built yet, it is in phase three. You can already choose the payer type at admission, but the full claim flow comes later."

**Is it live somewhere?**
> "It is in testing right now. We are building automated tests to make it production-ready. The demo will run on the test setup."

## 11. Closing

> "Let us do a live demo next week, around 30 to 40 minutes. If a doctor or a front-office person from your side can join, that will help. Which day and time works for you?"

After the call, write down: their current software, their top two or three problems, and who joins the demo.

---

## 12. Cheat-sheet

**Status:** HMS = Hospital Management System. Front end Angular, back end .NET Core. OPD (phase 1) and IPD (phase 2) are built. Phase 3 (pharmacy and inventory, IPD billing, insurance/TPA) is pending and its written scope is not available yet. It runs on a test setup, not live in a hospital.

**OPD flow:** register patient (UHID) -> doctor schedule and slots -> appointment -> fee and bill. Cancel, reschedule, no-show and refund work.

**IPD flow:**
1. Admission and deposit at reception.
2. Ward in-charge gets a notification and assigns a nurse.
3. Nurse does the first assessment (Nursing Admission).
4. Doctor writes assessment, orders, medicines, tests and ward-round notes.
5. Doctor orders create nursing tasks. Nurse records vitals, intake/output and notes.
6. Medicines go to the pharmacist.
7. Discharge: doctor starts, then nursing, pharmacy and billing clear it, then final sign-off.

| Term | Meaning |
|---|---|
| OPD / IPD | Outpatient / inpatient |
| UHID | Patient's unique hospital ID |
| TPA | Company that handles insurance claims between hospital and insurer |
| PMJAY / Ayushman | Government health insurance |
| MAR | Record of every medicine dose given by the nurse |
| LAMA | Patient leaves against doctor's advice |
| Handover | Nurse passes patient information to the next shift |

## 13. Do not promise on this call
Price, dates, phase 3 date, "live clients", legal terms of white-label. For ownership say only: "It is our company's product."

## 14. Before the demo
- Add bed and ward data (13 of 14 wards show 0 beds, bed charge shows Rs 0).
- Remove duplicate patients and junk bed numbers.
- Fix time showing in UTC on orders, medicines and escalations.
- Nurse worklist takes about 15 seconds to load.
- Show one full IPD flow (admission to discharge), then OPD booking, then roles. Do not open insurance or pharmacy screens.
