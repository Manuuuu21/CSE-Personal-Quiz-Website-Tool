/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */

const data_08 = [
{
    "id": 0,
    "question": "Statement: “John is likely a basketball player. He is really tall.”<br/><br/>Question: Which of the following statements is true about basketball players?",
    "choices": [
      "Only tall people can be basketball players.",
      "Being tall helps John play basketball.",
      "Height helps basketball players perform better.",
      "A tall height enables basketball players to reach the hoop more easily.",
      "Basketball players are usually tall."
    ],
    "correct_ans": "Basketball players are usually tall.",
    "explanation": "Basketball players need to be able to reach the hoop, and being tall can be an advantage in this sport. This is why the statement “Basketball players are usually tall” is true. It doesn’t mean that all basketball players are tall or that only tall people can play basketball, but it is a common characteristic found in many players. Therefore, option E is the correct answer."
  },
  {
    "id": 1,
    "question": "Statement: “Sarah is likely a chef. She can chop vegetables really fast.”<br/><br/>ASSUMPTIONS:",
    "choices": [
      "Only people who can chop vegetables fast can be chefs.",
      "Chopping vegetables fast helps Sarah cook.",
      "Speed in chopping vegetables helps chefs prepare meals faster.",
      "Fast chopping enables chefs to handle more orders.",
      "Chefs can usually chop vegetables fast."
    ],
    "correct_ans": "Chefs can usually chop vegetables fast.",
    "explanation": "Chefs need to be able to prepare ingredients quickly, and being able to chop vegetables fast can be an advantage in this profession. This is why the statement “Chefs can usually chop vegetables fast” is true."
  },
  {
    "id": 2,
    "question": "Statement: “Mike is likely a swimmer. He has a strong upper body.”<br/><br/>ASSUMPTIONS:",
    "choices": [
      "Only people with a strong upper body can be swimmers.",
      "Having a strong upper body helps Mike swim.",
      "A strong upper body helps swimmers perform better.",
      "A strong upper body enables swimmers to swim faster.",
      "Swimmers usually have a strong upper body."
    ],
    "correct_ans": "Swimmers usually have a strong upper body.",
    "explanation": "Swimmers need to have a strong upper body to swim effectively. This is why the statement “Swimmers usually have a strong upper body” is true."
  },
  {
    "id": 3,
    "question": "Statement: “Emma is likely a singer. She has a powerful voice.”<br/><br/>ASSUMPTIONS:",
    "choices": [
      "Only people with a powerful voice can be singers.",
      "Having a powerful voice helps Emma sing.",
      "A powerful voice helps singers perform better.",
      "A powerful voice enables singers to reach high notes.",
      "Singers usually have a powerful voice."
    ],
    "correct_ans": "Singers usually have a powerful voice.",
    "explanation": "Singers need to have a powerful voice to sing effectively. This is why the statement “Singers usually have a powerful voice” is true."
  },
  {
    "id": 4,
    "question": "Statement: “Jake is likely a writer. He has a wide vocabulary.”<br/><br/>ASSUMPTIONS:",
    "choices": [
      "Only people with a wide vocabulary can be writers.",
      "Having a wide vocabulary helps Jake write.",
      "A wide vocabulary helps writers express ideas better.",
      "A wide vocabulary enables writers to use more descriptive language.",
      "Writers usually have a wide vocabulary."
    ],
    "correct_ans": "Writers usually have a wide vocabulary.",
    "explanation": "Writers need to have a wide vocabulary to express their ideas effectively. This is why the statement “Writers usually have a wide vocabulary” is true."
  },
  {
    "id": 5,
    "question": "Statement: “Lily is likely a dancer. She is very flexible.”<br/><br/>ASSUMPTIONS:",
    "choices": [
      "Only people who are very flexible can be dancers.",
      "Being very flexible helps Lily dance.",
      "Flexibility helps dancers perform better.",
      "Being flexible enables dancers to perform complex moves.",
      "Dancers are usually very flexible."
    ],
    "correct_ans": "Dancers are usually very flexible.",
    "explanation": "Dancers need to be flexible to perform a variety of dance moves. This is why the statement “Dancers are usually very flexible” is true."
  },
  {
    "id": 6,
    "question": "Statement: “All mathematicians are logical. Logical people are good problem solvers. Alice is logical. Bob is not a good problem solver.”<br/><br/>CONCLUSION:",
    "choices": [
      "Alice is a mathematician.",
      "Bob is not a mathematician.",
      "Bob is not logical.",
      "Good problem solvers are logical.",
      "Mathematicians are good problem solvers."
    ],
    "correct_ans": "Alice is a mathematician.",
    "explanation": "Since all mathematicians are logical and Alice is logical, it can be concluded that Alice is a mathematician."
  },
  {
    "id": 7,
    "question": "Statement: “All athletes are fit. Fit people have good stamina. John has good stamina. Mary is not fit.”<br/><br/>CONCLUSION:",
    "choices": [
      "John is an athlete.",
      "Mary is not an athlete.",
      "Mary does not have good stamina.",
      "Good stamina people are fit.",
      "Athletes have good stamina."
    ],
    "correct_ans": "Mary is not an athlete.",
    "explanation": "Since all athletes are fit and Mary is not fit, it can be concluded that Mary is not an athlete."
  },
  {
    "id": 8,
    "question": "Statement: “All teachers are knowledgeable. Knowledgeable people are good at explaining. Sarah is good at explaining. Mike is not knowledgeable.”<br/><br/>CONCLUSION:",
    "choices": [
      "Sarah is a teacher.",
      "Mike is not a teacher.",
      "Mike is not good at explaining.",
      "Good at explaining people are knowledgeable.",
      "Teachers are good at explaining."
    ],
    "correct_ans": "Mike is not a teacher.",
    "explanation": "Since all teachers are knowledgeable and Mike is not knowledgeable, it can be concluded that Mike is not a teacher."
  },
  {
    "id": 9,
    "question": "Statement: “All doctors are caring. Caring people are empathetic. Emma is empathetic. Jake is not caring.”<br/><br/>CONCLUSION:",
    "choices": [
      "Emma is a doctor.",
      "Jake is not a doctor.",
      "Jake is not empathetic.",
      "Empathetic people are caring.",
      "Doctors are empathetic."
    ],
    "correct_ans": "Jake is not a doctor.",
    "explanation": "Since all doctors are caring and Jake is not caring, it can be concluded that Jake is not a doctor."
  },
  {
    "id": 10,
    "question": "Statement: “All engineers are analytical. Analytical people are good at problem-solving. Lily is good at problem-solving. Alex is not analytical.”<br/><br/>CONCLUSION:",
    "choices": [
      "Lily is an engineer.",
      "Alex is not an engineer.",
      "Alex is not good at problem-solving.",
      "Good at problem-solving people are analytical.",
      "Engineers are good at problem-solving."
    ],
    "correct_ans": "Alex is not an engineer.",
    "explanation": "Since all engineers are analytical and Alex is not analytical, it can be concluded that Alex is not an engineer."
  },
  {
    "id": 11,
    "question": "Statement: “The project manager informed the team that they will be starting a new project next month.”\n<br><br>\nASSUMPTIONS:\n<br><br>\nI. The new project has been fully defined and planned out.<br> \nII. The team members are capable of handling the new project.",
    "choices": [
      "Only I is implicit",
      "Only II is implicit",
      "Either I or II is implicit",
      "Neither I nor II is implicit",
      "Both I and II are implicit"
    ],
    "correct_ans": "Both I and II are implicit",
    "explanation": "Both assumptions are implicit in the statement. Assumption I is implicit because the project manager’s statement suggests that the new project has been fully defined and planned out, ready for the team to start working on it next month. Assumption II is implicit because the project manager’s statement suggests that the team members are capable of handling the new project, as they have been informed that they will be starting it next month. Therefore, both assumptions I and II are implicit in the statement."
  },
  {
    "id": 12,
    "question": "Statement: “The team leader informed the group that they will be working on a new strategy next week.”\n<br/><br/>\nASSUMPTIONS:\n<br/><br/>\nI. The new strategy has been fully defined and planned out.<br/>\nII. The group members are capable of handling the new strategy.",
    "choices": [
      "Only I is implicit",
      "Only II is implicit",
      "Either I or II is implicit",
      "Neither I nor II is implicit",
      "Both I and II are implicit"
    ],
    "correct_ans": "Both I and II are implicit",
    "explanation": "Both assumptions are implicit in the statement. Assumption I is implicit because the team leader’s statement suggests that the new strategy has been fully defined and planned out, ready for the group to start working on it next week. Assumption II is implicit because the team leader’s statement suggests that the group members are capable of handling the new strategy, as they have been informed that they will be starting it next week. Therefore, both assumptions I and II are implicit in the statement."
  },
  {
    "id": 13,
    "question": "Statement: “The coach told the team that they will be learning a new play next practice.”\n\n<br><br>ASSUMPTIONS:<br><br>\n\nI. The new play has been fully defined and planned out. <br>\nII. The team members are capable of learning the new play.",
    "choices": [
      "Only I is implicit",
      "Only II is implicit",
      "Either I or II is implicit",
      "Neither I nor II is implicit",
      "Both I and II are implicit"
    ],
    "correct_ans": "Both I and II are implicit",
    "explanation": "Both assumptions are implicit in the statement. Assumption I is implicit because the coach’s statement suggests that the new play has been fully defined and planned out, ready for the team to start learning it next practice. Assumption II is implicit because the coach’s statement suggests that the team members are capable of learning the new play, as they have been informed that they will be starting it next practice. Therefore, both assumptions I and II are implicit in the statement."
  },
  {
    "id": 14,
    "question": "Statement: “The principal announced that the school will be introducing a new curriculum next year.”\n<br><br>\nASSUMPTIONS:\n<br><br>\nI. The new curriculum has been fully developed and approved. <br>\nII. The teachers are prepared to teach the new curriculum.",
    "choices": [
      "Only I is implicit",
      "Only II is implicit",
      "Either I or II is implicit",
      "Neither I nor II is implicit",
      "Both I and II are implicit"
    ],
    "correct_ans": "Only I is implicit",
    "explanation": "The statement implies that the new curriculum has been fully developed and approved (Assumption I), as it is ready to be introduced next year. However, the statement does not provide information on whether the teachers are prepared to teach the new curriculum (Assumption II)."
  },
  {
    "id": 15,
    "question": "Statement: “The coach told the team that they will be learning a new play next practice.”\n<br><br>\nASSUMPTIONS:\n<br><br>\nI. The new play has been fully defined and planned out. <br>\nII. The team members are capable of learning the new play.",
    "choices": [
      "Only I is implicit",
      "Only II is implicit",
      "Either I or II is implicit",
      "Neither I nor II is implicit",
      "Both I and II are implicit"
    ],
    "correct_ans": "Only II is implicit",
    "explanation": "The statement implies that the team members are capable of learning the new play (Assumption II), as they have been informed that they will be learning it next practice. However, the statement does not provide information on whether the new play has been fully defined and planned out (Assumption I)."
  },
  {
    "id": 16,
    "question": "Statement: “The manager informed the staff that they will be implementing a new policy next month.”\n<br><br>\nASSUMPTIONS:\n<br><br>\nI. The new policy has been fully defined and planned out. <br>\nII. The staff members are capable of implementing the new policy.",
    "choices": [
      "Only I is implicit",
      "Only II is implicit",
      "Either I or II is implicit",
      "Neither I nor II is implicit",
      "Both I and II are implicit"
    ],
    "correct_ans": "Both I and II are implicit",
    "explanation": "Both assumptions are implicit in the statement. Assumption I is implicit because the manager’s statement suggests that the new policy has been fully defined and planned out, ready for the staff to start implementing it next month. Assumption II is implicit because the manager’s statement suggests that the staff members are capable of implementing the new policy, as they have been informed that they will be starting it next month."
  },
  {
    "id": 17,
    "question": "Statement: “The teacher told the students that they will be studying a new topic next week.”\n<br><br>\nASSUMPTIONS:\n<br><br>\nI. The new topic has been fully defined and planned out. <br>\nII. The students are capable of studying the new topic.",
    "choices": [
      "Only I is implicit",
      "Only II is implicit",
      "Either I or II is implicit",
      "Neither I nor II is implicit",
      "Both I and II are implicit"
    ],
    "correct_ans": "Neither I nor II is implicit",
    "explanation": "The statement does not provide information on whether the new topic has been fully defined and planned out (Assumption I) or whether the students are capable of studying the new topic (Assumption II). Therefore, neither assumption is implicit in the statement."
  },
  {
    "id": 18,
    "question": "Statement: “The director informed the actors that they will be performing a new scene next rehearsal.”\n<br><br>\nASSUMPTIONS:\n<br><br>\nI. The new scene has been fully defined and planned out. <br>\nII. The actors are capable of performing the new scene.",
    "choices": [
      "Only I is implicit",
      "Only II is implicit",
      "Either I or II is implicit",
      "Neither I nor II is implicit",
      "Both I and II are implicit"
    ],
    "correct_ans": "Either I or II is implicit",
    "explanation": "The statement implies that either the new scene has been fully defined and planned out (Assumption I) or the actors are capable of performing the new scene (Assumption II), as they have been informed that they will be performing it next rehearsal. However, the statement does not provide enough information to determine which assumption is implicit. Therefore, either Assumption I or Assumption II is implicit in the statement."
  }


];