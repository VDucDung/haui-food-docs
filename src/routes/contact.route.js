/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Contact management and retrieval
 */

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a contact
 *     description: Users can create contact.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullname
 *               - email
 *               - phone
 *               - message
 *             properties:
 *               fullname:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               phone:
 *                 type: string
 *               message:
 *                  type: string
 *             example:
 *               fullname: fake name
 *               email: fake@example.com
 *               phone: (+84)12345678
 *               message: fake message
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Contact'
 */
