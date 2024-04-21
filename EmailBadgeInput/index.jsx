// import Badge from '@dtci/spellbook/Badge';
// import Button from '@dtci/spellbook/Button';
// import React from 'react';
// import { z } from 'zod';
// import styles from './EmailBadgeInput.module.scss';

// const EmailBadgeInput = ({ onChange, value = [] }) => {
//   const [emails, setEmails] = React.useState(value);
//   const [hasError, setHasError] = React.useState(false);

//   React.useEffect(() => {
//     if (onChange != null) onChange(emails);
//   }, [emails]);

//   const onKeyUp = (ev) => {
//     const { key, target } = ev;

//     if (key === 'Enter' || key === ' ') {
//       try {
//         const email = z.string().email().parse(target.value);
//         setEmails([...emails, email]);
//         target.value = '';
//         setHasError(false);
//       } catch (err) {
//         setHasError(true);
//       }
//     }

//     if (target.value.length === 0) setHasError(false);
//   };

//   const onRemove = (email) => () => {
//     setEmails(emails.filter((e) => e !== email));
//   };

//   const onRemoveAll = () => {
//     setEmails([]);
//   };

//   const onPaste = (ev) => {
//     const { clipboardData, target } = ev;
//     try {
//       const parse = z.array(z.string().email()).safeParse(
//         clipboardData
//           .getData('text')
//           .split(',')
//           .map((e) => e.toLowerCase().trim())
//           .filter((e) => e.length > 0),
//       );
//       setEmails(Array.from(new Set([...emails, ...parse.data])));
//     } catch (err) {
//       console.error(err);
//       setHasError(true);
//     } finally {
//       ev.preventDefault();
//       target.value = '';
//       setTimeout(() => {
//         setHasError(false);
//       }, 400);
//     }
//   };

//   return (
//     <div className={[styles.root, hasError && styles.error].join(' ')}>
//       {emails.map((email) => (
//         <Badge
//           key={window.crypto.randomUUID()}
//           shape="pill"
//           color="base"
//           light
//           width="auto"
//           style={{ paddingRight: 3 }}
//         >
//           {email}
//           <Button
//             iconOnly
//             iconType="fa-x"
//             labelText={`Remove ${email}`}
//             onClick={onRemove(email)}
//             sizeType="smaller"
//             styleType="demoted"
//           />
//         </Badge>
//       ))}
//       <input
//         className={hasError && styles.error}
//         type="email"
//         onKeyUp={onKeyUp}
//         onPaste={onPaste}
//         placeholder="Type email..."
//       />
//       {emails.length >= 2 && (
//         <Badge
//           shape="circle"
//           color="primary"
//           light
//           style={{ gap: 0, padding: 0, width: 'auto', height: 'auto' }}
//         >
//           <Button
//             iconOnly
//             iconType="fa-x"
//             labelText="Remove all emails"
//             onClick={onRemoveAll}
//             sizeType="smaller"
//             styleType="demoted"
//           />
//         </Badge>
//       )}
//     </div>
//   );
// };

// export default EmailBadgeInput;
