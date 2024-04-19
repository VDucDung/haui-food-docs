/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management and retrieval
 */

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a review
 *     description: Only admins can create review.
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - productId
 *               - orderId
 *               - rating
 *               - isReview
 *               - comment
 *             properties:
 *               userId:
 *                 type: string
 *                 format: objectId
 *               productId:
 *                 type: string
 *                 format: objectId
 *               orderId:
 *                 type: string
 *                 format: objectId
 *               rating:
 *                  type: number
 *               isReview:
 *                  type: boolean
 *               comment:
 *                  type: string
 *             example:
 *               userId: 5ebac534954b54139806c112
 *               productId: 5ebac534954b54139806c112
 *               orderId: 6603d90f7c2708f66ed2ee4c
 *               rating: 0
 *               isReview: false
 *               comment: fake comment
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Review'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden' 
 */
