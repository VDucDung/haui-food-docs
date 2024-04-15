/**
 * @swagger
 * tags:
 *   name: Cart-details
 *   description: Cart-detail management and retrieval
 */

/**
 * @swagger
 * /cart-details:
 *   post:
 *     summary: Create a cart-detail
 *     description: Users can create cart-details.
 *     tags: [Cart-details]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - quantity 
 *             properties:
 *               productId:
 *                 type: objectId
 *               quantity:
 *                 type: number
 *             example:
 *               productId: 6602f79a65bdc867e599b25e
 *               quantity: 1
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Card-detail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 * 
 */
